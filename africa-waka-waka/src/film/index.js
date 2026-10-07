import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Mesh,
  Group,
  PlaneGeometry,
  SphereGeometry,
  BoxGeometry,
  CylinderGeometry,
  BufferGeometry,
  BufferAttribute,
  Float32BufferAttribute,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  ShaderMaterial,
  Points,
  CanvasTexture,
  Vector2,
  Vector3,
  Vector4,
  Color,
  AdditiveBlending,
  DoubleSide,
  LinearFilter,
  LinearMipmapLinearFilter,
  ClampToEdgeWrapping,
  MathUtils,
} from "three";
import { SKY, SURFACE, HILLS, BUILDINGS, PALMS, LIGHTS, POOL, SIGN, SOLID, YARD } from "./shaders.js";
import { makeNoiseTexture, makeWaterNormals, makePalmAtlas, makeSignTexture, drawSignLogo } from "./textures.js";
import { buildWorld, bakeMaps, bakeYard, YARD as YARD_RECT, REGION, CITY, MOON, RUNWAY, road, GATE_S, shoreX, hillHeight, HILLS_Z } from "./world.js";
import { buildResortGeometry } from "./resort.js";
import { track, monotone, makePath, clamp, lerp, smoothstep } from "./util.js";

/* ------------------------------------------------------------------ camera choreography */
// [p, x, y, z]. Altitude and forward distance only ever decrease. The keys after the drive are
// set relative to the resort once the world exists. The drive runs from 0.52 to about 0.84;
// the rest is the arrival: over the side wall and down into the garden, ending at eye level
// on the lawn with the main house's arcade side-on, as in the photos.
function cameraTracks(resort) {
  const at = (u, w) => resort.toWorld(u, w);
  const [a1x, a1z] = at(-560, -6);
  const [a2x, a2z] = at(-170, -6);
  const [a3x, a3z] = at(-80, -1);
  const [a4x, a4z] = at(-40, 21);
  const [a5x, a5z] = at(-25, 28);
  const [l1x, l1z] = at(40, 40);
  const [l2x, l2z] = at(8, 44);
  const [l3x, l3z] = at(5, 47);
  const [l4x, l4z] = at(6, 51);
  const cam = track([
    [0.0, 0, 720, 13200],
    [0.2, 0, 430, 7000],
    [0.36, 20, 112, 1500],
    [0.415, 50, 62, -80],
    [0.47, 190, 56, -760],
    [0.557, 620, 52, -1350],
    [0.654, 1380, 46, -1760],
    [0.758, a1x, 38, a1z],
    [0.86, a2x, 21, a2z],
    [0.925, a3x, 13, a3z],
    [0.97, a4x, 6.4, a4z],
    [1.0, a5x, 5.2, a5z],
  ]);
  const look = track([
    [0.0, 1700, -560, 1200],
    [0.2, 800, -450, -1500],
    [0.36, 40, -60, -1400],
    [0.415, 30, -12, -1100],
    [0.47, 380, -4, -1750],
    [0.557, 1300, 0, -2050],
    [0.654, 2300, 0, -2520],
    [0.758, l1x, 2, l1z],
    [0.86, l2x, 3, l2z],
    [0.925, l3x, 3, l3z],
    [1.0, l4x, 2.6, l4z],
  ]);
  return { cam, look };
}

// The plane holds a 3° glide slope to the aiming point, then rolls out.
const TOUCH_Z = -350;
const PLANE_Z = monotone([0, 0.2, 0.3, 0.36, 0.415, 0.47, 0.53, 0.6, 0.7, 1], [12500, 6300, 2350, 1060, TOUCH_Z, -1120, -1700, -2100, -2330, -2420]);
const glide = (z) => (z - TOUCH_Z) * Math.tan((3 * Math.PI) / 180) + 3.4;

// The shuttle leaves the curb, slows for the gate, then turns in and pulls up at the main house.
const T_GATE = 0.84;
const SHUTTLE_S = monotone([0, 0.5, 0.565, 0.654, 0.758, T_GATE, 1], [0, 0, 260, 1200, 2080, GATE_S - 12, GATE_S - 12]);

export const CHAPTERS = [
  { at: 0.0, id: "approach" },
  { at: 0.38, id: "touchdown" },
  { at: 0.52, id: "road" },
  { at: 0.86, id: "arrived" },
];

export function createFilm({ canvas, mobile = false, fontFamily = "Georgia, serif", signLogo = null }) {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance", stencil: false });
  renderer.setClearColor(0x05080f, 1);
  renderer.autoClear = true;

  const maxDpr = mobile ? 1.25 : 1.5;
  let dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  renderer.setPixelRatio(dpr);

  const scene = new Scene();
  const camera = new PerspectiveCamera(42, 1, 1.5, 80000);

  /* textures */
  const noise = makeNoiseTexture(256);
  const waterN = makeWaterNormals(256);
  const palmTex = makePalmAtlas();
  const signTex = makeSignTexture(fontFamily);

  const world = buildWorld({ mobile });
  if (world.resort.porch.length > 32) console.warn("film: only the first 32 resort lamps light the buildings");
  const { cam: CAM, look: LOOK } = cameraTracks(world.resort);
  const res = mobile ? 1024 : 2048;
  const maps = bakeMaps(world, res);
  const albedoTex = new CanvasTexture(maps.albedo);
  albedoTex.flipY = false;
  albedoTex.premultiplyAlpha = true;
  albedoTex.wrapS = albedoTex.wrapT = ClampToEdgeWrapping;
  albedoTex.minFilter = LinearMipmapLinearFilter;
  albedoTex.magFilter = LinearFilter;
  albedoTex.anisotropy = 4;
  const lightTex = new CanvasTexture(maps.light);
  lightTex.flipY = false;
  lightTex.wrapS = lightTex.wrapT = ClampToEdgeWrapping;
  lightTex.minFilter = LinearMipmapLinearFilter;
  lightTex.magFilter = LinearFilter;

  const moonDir = new Vector3(
    Math.sin(MathUtils.degToRad(MOON.bearing)) * Math.cos(MathUtils.degToRad(MOON.elev)),
    Math.sin(MathUtils.degToRad(MOON.elev)),
    -Math.cos(MathUtils.degToRad(MOON.bearing)) * Math.cos(MathUtils.degToRad(MOON.elev))
  ).normalize();

  const U = {
    uTime: { value: 0 },
    uMoonDir: { value: moonDir },
    uCityDir: { value: new Vector2(1, 0) },
    uCityBearing: { value: 0.5 },
    uCitySpread: { value: 0.3 },
    uCityElTop: { value: 0.02 },
    uNoise: { value: noise },
    uFog: { value: 0.000058 },
    uRegion: { value: new Vector4(REGION.x0, REGION.z0, REGION.size, REGION.size) },
    uLightMap: { value: lightTex },
    uLightGain: { value: 2.9 },
    uSpotPos: { value: [new Vector3(), new Vector3()] },
    uSpotDir: { value: [new Vector3(0, -1, 0), new Vector3(0, -1, 0)] },
    uSpotCol: { value: [new Vector3(), new Vector3()] },
    uSpotCone: { value: [new Vector2(0.97, 0.995), new Vector2(0.9, 0.97)] },
    uSpotRange: { value: [900, 90] },
    // the BUILDINGS shader takes 32 of these; more would be dropped
    uPorch: { value: Array.from({ length: 32 }, (_, i) => new Vector4(...(world.resort.porch[i] || [0, -100, 0, 0]))) },
    uPorchCol: { value: new Vector3(1.0, 0.72, 0.42) },
  };

  const mat = (def, extra = {}, opts = {}) =>
    new ShaderMaterial({
      uniforms: { ...U, ...extra },
      vertexShader: def.vertex,
      fragmentShader: def.fragment,
      ...opts,
    });

  /* sky */
  const sky = new Mesh(new SphereGeometry(30000, 48, 24), mat(SKY, {}, { side: 1, depthWrite: false, depthTest: false }));
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);

  /* water + land */
  const surfGeo = new PlaneGeometry(100000, 100000, 1, 1);
  surfGeo.rotateX(-Math.PI / 2);
  const rg0 = world.resort.g;
  const surface = new Mesh(
    surfGeo,
    mat(SURFACE, {
      uWaterN: { value: waterN },
      uAlbedo: { value: albedoTex },
      uYardO: { value: new Vector4(rg0.x, rg0.z, rg0.dx, rg0.dz) },
      uYardR: { value: new Vector4(YARD_RECT.u0, YARD_RECT.u1, YARD_RECT.w0, YARD_RECT.w1) },
    })
  );
  surface.position.set(4000, 0, -2000);
  surface.frustumCulled = false;
  scene.add(surface);

  /* Freetown hills */
  {
    const nt = mobile ? 48 : 72;
    const nz = mobile ? 200 : 320;
    const T = 9500;
    const pos = new Float32Array((nt + 1) * (nz + 1) * 3);
    let k = 0;
    for (let j = 0; j <= nz; j++) {
      const z = lerp(HILLS_Z[0], HILLS_Z[1], j / nz);
      const sx = shoreX(z);
      for (let i = 0; i <= nt; i++) {
        const t = Math.pow(i / nt, 1.35) * T;
        pos[k++] = sx + t;
        pos[k++] = hillHeight(t, z);
        pos[k++] = z;
      }
    }
    const idx = [];
    for (let j = 0; j < nz; j++) {
      for (let i = 0; i < nt; i++) {
        const a = j * (nt + 1) + i;
        const b = a + 1;
        const c = a + (nt + 1);
        const d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    const g = new BufferGeometry();
    g.setAttribute("position", new BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const hills = new Mesh(g, mat(HILLS, { uCityZ: { value: CITY.z }, uCityZSpread: { value: CITY.zSpread } }, { side: DoubleSide }));
    hills.frustumCulled = false;
    scene.add(hills);
  }

  /* buildings (merged) */
  {
    const P = [];
    const N = [];
    const F = [];
    const B = [];
    const pushQuad = (a, b, c, d, n, fa, fb, fc, fd, bd) => {
      for (const [v, f] of [[a, fa], [b, fb], [c, fc], [a, fa], [c, fc], [d, fd]]) {
        P.push(v[0], v[1], v[2]);
        N.push(n[0], n[1], n[2]);
        F.push(f[0], f[1]);
        B.push(bd[0], bd[1], bd[2], bd[3]);
      }
    };
    const box = (cx, cz, rot, w, d, h, y0, bd, roofOnly = false) => {
      const c = Math.cos(rot);
      const s = Math.sin(rot);
      const tw = (lx, y, lz) => [cx + lx * c + lz * s, y, cz - lx * s + lz * c];
      const tn = (nx, ny, nz) => [nx * c + nz * s, ny, -nx * s + nz * c];
      const hw = w / 2;
      const hd = d / 2;
      const y1 = y0 + h;
      const hh = roofOnly ? 0 : h;
      // top
      pushQuad(tw(-hw, y1, -hd), tw(-hw, y1, hd), tw(hw, y1, hd), tw(hw, y1, -hd), tn(0, 1, 0), [-hw, -hd], [-hw, hd], [hw, hd], [hw, -hd], bd);
      // sides (skip for thin roof slabs? keep edges)
      const sides = [
        [[hw, -hd], [hw, hd], [1, 0], d],
        [[-hw, hd], [-hw, -hd], [-1, 0], d],
        [[hw, hd], [-hw, hd], [0, 1], w],
        [[-hw, -hd], [hw, -hd], [0, -1], w],
      ];
      for (const [p0, p1, nn, len] of sides) {
        pushQuad(
          tw(p0[0], y0, p0[1]),
          tw(p1[0], y0, p1[1]),
          tw(p1[0], y1, p1[1]),
          tw(p0[0], y1, p0[1]),
          tn(nn[0], 0, nn[1]),
          [0, 0],
          [len, 0],
          [len, hh],
          [0, hh],
          bd
        );
      }
    };
    // terminal
    box(585, -1600, 0, 50, 500, 14, 0, [0.37, 0.82, 1, 2]);
    box(585, -1600, 0, 58, 508, 1.2, 14, [0.11, 0, 1, 0], true);
    // houses and shops along the road
    world.houses.forEach((h, i) => box(h.x, h.z, h.rot, h.w, h.d, h.h, 0, [i * 0.137, h.lit, 0, 1]));
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(P, 3));
    g.setAttribute("normal", new Float32BufferAttribute(N, 3));
    g.setAttribute("fc", new Float32BufferAttribute(F, 2));
    g.setAttribute("bdata", new Float32BufferAttribute(B, 4));
    const m = new Mesh(g, mat(BUILDINGS));
    m.frustumCulled = false;
    scene.add(m);
  }

  /* the resort: villas, pavilion, gatehouse and walls (resort.js) */
  {
    const rg = buildResortGeometry(world.resort);
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(rg.position, 3));
    g.setAttribute("normal", new Float32BufferAttribute(rg.normal, 3));
    g.setAttribute("fc", new Float32BufferAttribute(rg.fc, 2));
    g.setAttribute("bdata", new Float32BufferAttribute(rg.bdata, 4));
    const m = new Mesh(g, mat(BUILDINGS, {}, { side: DoubleSide }));
    m.frustumCulled = false;
    scene.add(m);
  }

  /* pool + sign */
  const r = world.resort;
  const resortRot = Math.atan2(-r.g.dz, r.g.dx);

  /* the garden, in detail for the last shot (world.js bakeYard) */
  {
    const yard = bakeYard(world, mobile);
    const tex = (c) => {
      const t = new CanvasTexture(c);
      t.flipY = false;
      t.wrapS = t.wrapT = ClampToEdgeWrapping;
      t.minFilter = LinearMipmapLinearFilter;
      t.magFilter = LinearFilter;
      t.anisotropy = 8;
      return t;
    };
    const { u0, u1, w0, w1 } = YARD_RECT;
    const corners = [[u0, w0], [u1, w0], [u1, w1], [u0, w1]];
    const pos = [];
    const uv = [];
    const lp = [];
    for (const i of [0, 1, 2, 0, 2, 3]) {
      const [u, w] = corners[i];
      const [x, z] = r.toWorld(u, w);
      pos.push(x, 0.05, z);
      uv.push((u - u0) / (u1 - u0), (w - w0) / (w1 - w0));
      lp.push(u, w);
    }
    const yg = new BufferGeometry();
    yg.setAttribute("position", new Float32BufferAttribute(pos, 3));
    yg.setAttribute("uv", new Float32BufferAttribute(uv, 2));
    yg.setAttribute("lp", new Float32BufferAttribute(lp, 2));
    const ym = new Mesh(
      yg,
      mat(YARD, { uYardMask: { value: tex(yard.mask) }, uYardLight: { value: tex(yard.light) } }, { side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 })
    );
    ym.frustumCulled = false;
    scene.add(ym);
  }
  {
    const pg = new PlaneGeometry(r.pool.lu, r.pool.lw);
    pg.rotateX(-Math.PI / 2);
    const pool = new Mesh(pg, mat(POOL, { uSize: { value: new Vector2(r.pool.lu, r.pool.lw) } }));
    const [x, z] = r.toWorld(r.pool.u, r.pool.w);
    pool.position.set(x, 0.3, z);
    pool.rotation.y = resortRot;
    scene.add(pool);

    const sg = new PlaneGeometry(r.sign.width, r.sign.height);
    const sign = new Mesh(
      sg,
      new ShaderMaterial({
        uniforms: { uMap: { value: signTex }, uGain: { value: 1.7 } },
        vertexShader: SIGN.vertex,
        fragmentShader: SIGN.fragment,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
      })
    );
    const [sx, sz] = r.toWorld(r.sign.u, r.sign.w);
    sign.position.set(sx, r.sign.y, sz);
    // the villas face the gate: plane normal (+z local) points along -w
    sign.rotation.y = Math.atan2(-r.g.rx, -r.g.rz);
    sign.renderOrder = 12;
    sign.name = "sign";
    scene.add(sign);
    // the hotel's logo replaces the lettering once it has loaded (same-origin, so the canvas stays
    // usable as a texture)
    if (signLogo) {
      const img = new Image();
      img.onload = () => {
        drawSignLogo(signTex, img);
        sign.material.uniforms.uGain.value = 1.15;
      };
      img.src = signLogo;
    }
  }

  /* palms */
  {
    const all = world.palms.concat(world.resort.palms);
    const base = new PlaneGeometry(1, 1);
    const g = new InstancedBufferGeometry();
    g.index = base.index;
    g.setAttribute("position", base.getAttribute("position"));
    const off = new Float32Array(all.length * 3);
    const pd = new Float32Array(all.length * 4);
    const tint = new Float32Array(all.length * 3);
    all.forEach((p, i) => {
      off.set([p.x, 0, p.z], i * 3);
      pd.set([p.h, p.idx, p.flip, p.up], i * 4);
      tint.set(p.tint, i * 3);
    });
    g.setAttribute("offset", new InstancedBufferAttribute(off, 3));
    g.setAttribute("pdata", new InstancedBufferAttribute(pd, 4));
    g.setAttribute("tint", new InstancedBufferAttribute(tint, 3));
    g.instanceCount = all.length;
    const m = new Mesh(g, mat(PALMS, { uPalm: { value: palmTex } }, { side: DoubleSide }));
    m.frustumCulled = false;
    scene.add(m);
  }

  /* static lights */
  const lightsMat = (group) =>
    new ShaderMaterial({
      uniforms: {
        uTime: U.uTime,
        uPixelScale: { value: 800 },
        uGroups: { value: new Vector4(1, 1, 1, 1) },
      },
      vertexShader: LIGHTS.vertex,
      fragmentShader: LIGHTS.fragment,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    });
  const buildPoints = (list) => {
    const n = list.length;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const par = new Float32Array(n * 4);
    list.forEach((l, i) => {
      pos.set([l[0], l[1], l[2]], i * 3);
      col.set([l[3], l[4], l[5]], i * 3);
      par.set([l[6], l[7], l[8], l[9]], i * 4);
    });
    const g = new BufferGeometry();
    g.setAttribute("position", new BufferAttribute(pos, 3));
    g.setAttribute("color", new BufferAttribute(col, 3));
    g.setAttribute("params", new BufferAttribute(par, 4));
    return g;
  };
  const staticLights = new Points(buildPoints(world.lights), lightsMat());
  staticLights.frustumCulled = false;
  staticLights.renderOrder = 10;
  scene.add(staticLights);

  /* the plane */
  const solidMat = (hex) => mat(SOLID, { uColor: { value: new Color(hex) } });
  const plane = new Group();
  {
    const body = solidMat(0x8a8f99);
    const fus = new Mesh(new CylinderGeometry(2.0, 2.0, 34, 14), body);
    fus.rotation.x = Math.PI / 2;
    plane.add(fus);
    const nose = new Mesh(new SphereGeometry(2.0, 14, 10), body);
    nose.scale.set(1, 1, 2.2);
    nose.position.z = -17;
    plane.add(nose);
    const tailc = new Mesh(new CylinderGeometry(0.6, 2.0, 8, 12), body);
    tailc.rotation.x = -Math.PI / 2;
    tailc.position.z = 21;
    plane.add(tailc);
    for (const s of [-1, 1]) {
      const wing = new Mesh(new BoxGeometry(16, 0.45, 4.5), body);
      wing.position.set(s * 9.5, -0.9, 1.5);
      wing.rotation.y = s * -0.42;
      plane.add(wing);
      const eng = new Mesh(new CylinderGeometry(1.1, 1.1, 4, 12), body);
      eng.rotation.x = Math.PI / 2;
      eng.position.set(s * 6.5, -2.0, -1.5);
      plane.add(eng);
      const stab = new Mesh(new BoxGeometry(5.5, 0.3, 2.4), body);
      stab.position.set(s * 3.2, 0.6, 22.5);
      stab.rotation.y = s * -0.4;
      plane.add(stab);
    }
    const fin = new Mesh(new BoxGeometry(0.4, 6.5, 4.5), body);
    fin.position.set(0, 4.8, 22.5);
    fin.rotation.x = 0.35;
    plane.add(fin);
  }
  scene.add(plane);

  /* the shuttle, and its way in from the road to the main house */
  const inner = makePath(
    [[-12, 2.4], [-5, 2.6], [-1.4, 5.4], [0, 10], [0, 22], [0, 34], [0, 42.5]].map(([u, w]) => world.resort.toWorld(u, w)),
    12
  );
  const INNER_S = monotone([T_GATE, 0.955, 1], [0, inner.total, inner.total]);
  // a white minibus: body, a band of dark glass all round, wheels; front is local -z
  const shuttle = new Group();
  {
    const body = new Mesh(new BoxGeometry(2.0, 1.95, 5.3), solidMat(0xe9e4da));
    body.position.y = 1.3;
    shuttle.add(body);
    const glass = new Mesh(new BoxGeometry(2.04, 0.62, 5.0), solidMat(0x15181d));
    glass.position.set(0, 1.86, 0.05);
    shuttle.add(glass);
    const shield = new Mesh(new BoxGeometry(1.86, 0.7, 0.1), solidMat(0x15181d));
    shield.position.set(0, 1.8, -2.62);
    shield.rotation.x = 0.18;
    shuttle.add(shield);
    const tyre = solidMat(0x0b0b0c);
    for (const x of [-0.92, 0.92]) {
      for (const z of [-1.75, 1.75]) {
        const wh = new Mesh(new CylinderGeometry(0.36, 0.36, 0.26, 14), tyre);
        wh.rotation.z = Math.PI / 2;
        wh.position.set(x, 0.36, z);
        shuttle.add(wh);
      }
    }
  }
  scene.add(shuttle);

  /* dynamic lights: plane (7) + shuttle (4) */
  const dyn = [];
  for (let i = 0; i < 11; i++) dyn.push([0, -100, 0, 1, 1, 1, 1, 0, 0, 3]);
  const dynGeo = buildPoints(dyn);
  const dynLights = new Points(dynGeo, lightsMat());
  dynLights.frustumCulled = false;
  dynLights.renderOrder = 13;
  scene.add(dynLights);
  const dynPos = dynGeo.getAttribute("position");
  const dynCol = dynGeo.getAttribute("color");
  const dynPar = dynGeo.getAttribute("params");
  const setDyn = (i, p, c, size, type = 0, phase = 0) => {
    dynPos.setXYZ(i, p.x, p.y, p.z);
    dynCol.setXYZ(i, c[0], c[1], c[2]);
    dynPar.setXYZ(i, size, type, phase);
  };

  /* ------------------------------------------------------------------ state */
  let width = 1;
  let height = 1;
  let progress = 0;
  const tmp = new Vector3();
  const fwd = new Vector3();
  const right = new Vector3();
  const up = new Vector3(0, 1, 0);

  function setSize(w, h) {
    width = Math.max(1, w);
    height = Math.max(1, h);
    renderer.setSize(width, height, false);
    const aspect = width / height;
    camera.aspect = aspect;
    camera.fov = aspect >= 1.45 ? 40 : aspect <= 0.62 ? 62 : lerp(62, 40, (aspect - 0.62) / (1.45 - 0.62));
    camera.updateProjectionMatrix();
    const ps = (height * renderer.getPixelRatio()) / (2 * Math.tan(MathUtils.degToRad(camera.fov) / 2));
    staticLights.material.uniforms.uPixelScale.value = ps;
    dynLights.material.uniforms.uPixelScale.value = ps;
  }

  function place(p, time) {
    progress = p;
    U.uTime.value = time;

    // camera + a breath of handheld drift that settles as the shot lands
    const c = CAM(p);
    const l = LOOK(p);
    const amp = 0.35 + c[1] * 0.006;
    const dx = Math.sin(time * 0.31) * amp + Math.sin(time * 0.87 + 1.2) * amp * 0.4;
    const dy = Math.sin(time * 0.43 + 0.5) * amp * 0.6;
    camera.position.set(c[0] + dx, c[1] + dy, c[2]);
    camera.lookAt(l[0], l[1], l[2]);
    // narrow screens: lean the frame toward the story
    const aspect = width / height;
    if (aspect < 1.1) {
      // hero leans toward Freetown and the moon, the landing stays centred, the drive keeps
      // the resort in view, and the last shot is already centred on the main house
      const end = smoothstep(0.93, 1, p);
      const lean = (1.1 - aspect) * (0.2 * (1 - smoothstep(0.06, 0.2, p)) + 0.25 * smoothstep(0.62, 0.86, p) * (1 - end) + 0.08 * end);
      camera.rotateY(-lean);
      // and tips down at the end, lifting the house clear of the words at the foot of the screen
      camera.rotateX(-(1.1 - aspect) * 0.34 * end);
    }
    sky.position.copy(camera.position);

    // Freetown, as seen from here
    const cdx = CITY.x - camera.position.x;
    const cdz = CITY.z - camera.position.z;
    const cd = Math.hypot(cdx, cdz);
    U.uCityDir.value.set(cdx / cd, cdz / cd);
    U.uCityBearing.value = Math.atan2(cdx, -cdz);
    U.uCitySpread.value = Math.atan(7500 / cd) * 0.75;
    U.uCityElTop.value = Math.atan(420 / cd);

    // the plane
    const pz = PLANE_Z(p);
    const onGround = pz <= TOUCH_Z + 1;
    const flare = smoothstep(TOUCH_Z + 400, TOUCH_Z, pz);
    const py = Math.max(3.4, glide(pz) - flare * 2.5);
    plane.position.set(0, py, pz);
    plane.rotation.set(onGround ? 0.0 : 0.03 + flare * 0.06, 0, 0);
    plane.visible = p < 0.9;
    const landing = 1 - smoothstep(0.58, 0.66, p);
    fwd.set(0, 0, -1);
    setDyn(0, tmp.set(-3.4, py - 0.9, pz - 5), [1, 0.97, 0.9], 3.2 * landing + 0.01);
    setDyn(1, tmp.set(3.4, py - 0.9, pz - 5), [1, 0.97, 0.9], 3.2 * landing + 0.01);
    setDyn(2, tmp.set(-16.8, py - 0.8, pz + 4.8), [1.0, 0.12, 0.1], 1.6);
    setDyn(3, tmp.set(16.8, py - 0.8, pz + 4.8), [0.2, 1.0, 0.4], 1.6);
    setDyn(4, tmp.set(-16.9, py - 0.8, pz + 5.3), [1, 1, 1], 2.6, 2, 0.0);
    setDyn(5, tmp.set(16.9, py - 0.8, pz + 5.3), [1, 1, 1], 2.6, 2, 0.0);
    setDyn(6, tmp.set(0, py + 2.3, pz + 2), [1.0, 0.1, 0.08], 1.8, 3, 0.3);
    U.uSpotPos.value[0].set(0, py - 0.5, pz - 8);
    U.uSpotDir.value[0].set(0, -Math.sin(onGround ? 0.035 : 0.11), -1).normalize();
    U.uSpotCol.value[0].set(1.0, 0.95, 0.86).multiplyScalar(70 * landing);

    // the shuttle
    let rp;
    if (p <= T_GATE) {
      const q = road.at(SHUTTLE_S(p));
      rp = { x: q.x + q.rx * 2.4, z: q.z + q.rz * 2.4, dx: q.dx, dz: q.dz, rx: q.rx, rz: q.rz };
    } else rp = inner.at(INNER_S(p));
    shuttle.position.set(rp.x, 0, rp.z);
    shuttle.rotation.y = Math.atan2(-rp.dx, -rp.dz);
    shuttle.visible = p > 0.45;
    const sv = shuttle.visible ? 1 : 0;
    const fx = rp.dx;
    const fz = rp.dz;
    const rx = rp.rx;
    const rz = rp.rz;
    const sxp = shuttle.position.x;
    const szp = shuttle.position.z;
    // once parked, the headlights drop to sidelights; inside the walls they reach less far, as
    // the buildings would shadow them
    const head = sv * (1 - 0.85 * smoothstep(0.962, 0.99, p));
    setDyn(7, tmp.set(sxp + fx * 2.7 - rx * 0.75, 0.85, szp + fz * 2.7 - rz * 0.75), [1, 0.95, 0.85], 1.6 * Math.max(head, 0.35 * sv));
    setDyn(8, tmp.set(sxp + fx * 2.7 + rx * 0.75, 0.85, szp + fz * 2.7 + rz * 0.75), [1, 0.95, 0.85], 1.6 * Math.max(head, 0.35 * sv));
    const brake = p > 0.93 && p < 0.975 ? 1.6 : 1.0;
    setDyn(9, tmp.set(sxp - fx * 2.65 - rx * 0.8, 1.0, szp - fz * 2.65 - rz * 0.8), [1, 0.08, 0.05], 0.9 * brake * sv);
    setDyn(10, tmp.set(sxp - fx * 2.65 + rx * 0.8, 1.0, szp - fz * 2.65 + rz * 0.8), [1, 0.08, 0.05], 0.9 * brake * sv);
    U.uSpotPos.value[1].set(sxp + fx * 2.8, 1.0, szp + fz * 2.8);
    U.uSpotDir.value[1].set(fx, -0.12, fz).normalize();
    U.uSpotCol.value[1].set(1.0, 0.93, 0.8).multiplyScalar(9 * head);
    U.uSpotRange.value[1] = lerp(90, 26, smoothstep(T_GATE, T_GATE + 0.03, p));

    dynPos.needsUpdate = true;
    dynCol.needsUpdate = true;
    dynPar.needsUpdate = true;
  }

  function render() {
    renderer.render(scene, camera);
  }

  function setPixelRatio(r) {
    dpr = clamp(r, 0.5, maxDpr);
    renderer.setPixelRatio(dpr);
    setSize(width, height);
  }

  function readBottomColor() {
    const gl = renderer.getContext();
    const px = new Uint8Array(4 * 16);
    const w = gl.drawingBufferWidth;
    gl.readPixels(Math.floor(w / 2) - 8, 2, 16, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i = 0; i < 16; i++) {
      r += px[i * 4];
      g += px[i * 4 + 1];
      b += px[i * 4 + 2];
    }
    return [r / 16, g / 16, b / 16];
  }

  return {
    renderer,
    camera,
    scene,
    world,
    setSize,
    place,
    render,
    setPixelRatio,
    get pixelRatio() {
      return dpr;
    },
    get maxPixelRatio() {
      return maxDpr;
    },
    get progress() {
      return progress;
    },
    readBottomColor,
    dispose() {
      renderer.dispose();
    },
  };
}
