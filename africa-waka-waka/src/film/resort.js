// The resort, modelled on the photos of the real one: single-storey villas in salmon-pink
// plaster on red-brick plinths, maroon metal hip roofs with grey fascias, verandas with cream
// columns and arches and white balustrades, and the Chicken Bluff pavilion with pale-blue
// columns beside the pool. Everything is built in the resort's own frame (u along the road,
// w into the compound, y up), then turned into one world-space geometry for the BUILDINGS
// shader. Faces are drawn double-sided, so winding doesn't matter; normals are explicit.

// Material ids, read by the BUILDINGS shader from bdata.z
export const MAT = {
  PLASTER: 6, // pink walls; bdata.w: 0 plain, 2 windows, 100 + x front wall with the door at x
  BRICK: 7,
  ROOF: 8,
  CREAM: 9, // columns, capitals, trim
  SCREEN: 10, // veranda front: piers, arches and balustrade; bdata.w = bay width, bdata.y = door bay centre
  PAV_COL: 11, // pavilion columns
  DARK: 12, // fascias, soffits
  FLOOR: 13, // veranda floors and steps
  RAIL: 14, // wrought-iron railing
  WALL: 15, // perimeter wall
  FASCIA: 16, // grey fascia boards
};

// Villa row along the back of the compound, fronts facing the gate (-w).
// [u0, u1, porch front w, porch depth, house depth, arches, porch width]
// Porch width 0 runs an arcaded veranda along the whole front, as on the long house in the
// photos; otherwise a porch with its own roof stands out from the middle of the front.
export const VILLAS = [
  [-50, -35, 57.5, 2.7, 9.5, 3, 9.3],
  [-30, -15, 55, 2.7, 9.5, 3, 9.3],
  [-11, 11, 51, 2.8, 11, 7, 0], // main house: lobby and reception, with the sign
  [15, 30, 55, 2.7, 9.5, 3, 9.3],
  [35, 50, 57.5, 2.7, 9.5, 3, 9.3],
];
export const PLINTH = 0.95; // floor level, on top of the brick plinth
export const WALL_H = 3.35; // floor to eave
export const SPRING = 2.05; // floor to the top of the column capitals, where the arches spring
export const PAVILION = { u0: 30, u1: 46, w0: 19, w1: 31 };
export const GATEHOUSE = { u0: -15, u1: -9, w0: 11.5, w1: 16 };

export function buildResortGeometry(resort) {
  const { g } = resort;
  const P = [];
  const N = [];
  const F = [];
  const B = [];
  // local (u, y, w) → world (x, y, z)
  const W = (p) => [g.x + g.dx * p[0] + g.rx * p[2], p[1], g.z + g.dz * p[0] + g.rz * p[2]];
  const WN = (n) => {
    const x = g.dx * n[0] + g.rx * n[2];
    const z = g.dz * n[0] + g.rz * n[2];
    const l = Math.hypot(x, n[1], z) || 1;
    return [x / l, n[1] / l, z / l];
  };
  const tri = (a, b, c, n, fa, fb, fc, bd) => {
    const nw = WN(n);
    for (const [v, f] of [[a, fa], [b, fb], [c, fc]]) {
      const p = W(v);
      P.push(p[0], p[1], p[2]);
      N.push(nw[0], nw[1], nw[2]);
      F.push(f[0], f[1]);
      B.push(bd[0], bd[1], bd[2], bd[3]);
    }
  };
  const quad = (a, b, c, d, n, fa, fb, fc, fd, bd) => {
    tri(a, b, c, n, fa, fb, fc, bd);
    tri(a, c, d, n, fa, fc, fd, bd);
  };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const faceN = (a, b, c, up = true) => {
    const n = cross(sub(b, a), sub(c, a));
    const s = up && n[1] < 0 ? -1 : 1;
    return [n[0] * s, n[1] * s, n[2] * s];
  };
  let seed = 0.37;
  const bd = (mat, w = 0, y = 0) => [(seed += 0.131) % 1, y, mat, w];

  // an axis-aligned box; side faces get facade coords (along, height above y0)
  function box(u0, u1, y0, y1, w0, w1, mat, opts = {}) {
    const b = bd(mat, opts.win || 0, opts.lit || 0);
    const h = y1 - y0;
    const sides = [
      // [corner a, corner b, outward normal, length]  (bottom edge, left to right seen from outside)
      [[u0, w0], [u1, w0], [0, 0, -1], u1 - u0, "front"],
      [[u1, w1], [u0, w1], [0, 0, 1], u1 - u0, "back"],
      [[u0, w1], [u0, w0], [-1, 0, 0], w1 - w0, "left"],
      [[u1, w0], [u1, w1], [1, 0, 0], w1 - w0, "right"],
    ];
    for (const [a, c, n, len, name] of sides) {
      if (opts.skip && opts.skip.includes(name)) continue;
      const fb = opts.faceData && opts.faceData[name] ? opts.faceData[name] : b;
      quad([a[0], y0, a[1]], [c[0], y0, c[1]], [c[0], y1, c[1]], [a[0], y1, a[1]], n, [0, 0], [len, 0], [len, h], [0, h], fb);
    }
    if (!opts.noTop) {
      const tb = opts.topData || b;
      quad([u0, y1, w0], [u1, y1, w0], [u1, y1, w1], [u0, y1, w1], [0, 1, 0], [0, 0], [u1 - u0, 0], [u1 - u0, w1 - w0], [0, w1 - w0], tb);
    }
  }

  // a round column (n-gon prism) with a wider base and capital
  function column(u, w, y0, y1, r, mat) {
    const sides = 10;
    const ring = (yA, yB, rr, m) => {
      const b = bd(m);
      for (let i = 0; i < sides; i++) {
        const a0 = (i / sides) * Math.PI * 2;
        const a1 = ((i + 1) / sides) * Math.PI * 2;
        const p0 = [u + Math.cos(a0) * rr, w + Math.sin(a0) * rr];
        const p1 = [u + Math.cos(a1) * rr, w + Math.sin(a1) * rr];
        const am = (a0 + a1) / 2;
        const n = [Math.cos(am), 0, Math.sin(am)];
        const arc = rr * ((Math.PI * 2) / sides);
        quad([p0[0], yA, p0[1]], [p1[0], yA, p1[1]], [p1[0], yB, p1[1]], [p0[0], yB, p0[1]], n, [i * arc, 0], [(i + 1) * arc, 0], [(i + 1) * arc, yB - yA], [i * arc, yB - yA], b);
      }
    };
    ring(y0, y0 + 0.22, r * 1.45, mat);
    ring(y0 + 0.22, y1 - 0.26, r, mat);
    ring(y1 - 0.26, y1, r * 1.5, mat);
  }

  // hip roof over a rectangle, eaves at ye; ridge along the longer side
  function hipRoof(u0, u1, w0, w1, ye, pitch = 0.62) {
    const du = u1 - u0;
    const dw = w1 - w0;
    const b = bd(MAT.ROOF);
    const k = bd(MAT.DARK);
    const f = bd(MAT.FASCIA);
    if (du >= dw) {
      const hw = dw / 2;
      const yr = ye + hw * pitch;
      const wc = (w0 + w1) / 2;
      const r0 = [u0 + hw, yr, wc];
      const r1 = [u1 - hw, yr, wc];
      const sl = Math.hypot(hw, hw * pitch);
      let a = [u0, ye, w0], c = [u1, ye, w0];
      quad(a, c, r1, r0, faceN(a, c, r1), [0, 0], [du, 0], [du - hw, sl], [hw, sl], b);
      a = [u1, ye, w1]; c = [u0, ye, w1];
      quad(a, c, r0, r1, faceN(a, c, r0), [0, 0], [du, 0], [du - hw, sl], [hw, sl], b);
      a = [u0, ye, w1]; c = [u0, ye, w0];
      tri(a, c, r0, faceN(a, c, r0), [0, 0], [dw, 0], [hw, sl], b);
      a = [u1, ye, w0]; c = [u1, ye, w1];
      tri(a, c, r1, faceN(a, c, r1), [0, 0], [dw, 0], [hw, sl], b);
    } else {
      const hu = du / 2;
      const yr = ye + hu * pitch;
      const uc = (u0 + u1) / 2;
      const r0 = [uc, yr, w0 + hu];
      const r1 = [uc, yr, w1 - hu];
      const sl = Math.hypot(hu, hu * pitch);
      let a = [u0, ye, w1], c = [u0, ye, w0];
      quad(a, c, r0, r1, faceN(a, c, r0), [0, 0], [dw, 0], [dw - hu, sl], [hu, sl], b);
      a = [u1, ye, w0]; c = [u1, ye, w1];
      quad(a, c, r1, r0, faceN(a, c, r1), [0, 0], [dw, 0], [dw - hu, sl], [hu, sl], b);
      a = [u0, ye, w0]; c = [u1, ye, w0];
      tri(a, c, r0, faceN(a, c, r0), [0, 0], [du, 0], [hu, sl], b);
      a = [u1, ye, w1]; c = [u0, ye, w1];
      tri(a, c, r1, faceN(a, c, r1), [0, 0], [du, 0], [hu, sl], b);
    }
    // fascia board and soffit
    const fy = ye - 0.32;
    for (const [a, c, n, len] of [
      [[u0, w0], [u1, w0], [0, 0, -1], du],
      [[u1, w1], [u0, w1], [0, 0, 1], du],
      [[u0, w1], [u0, w0], [-1, 0, 0], dw],
      [[u1, w0], [u1, w1], [1, 0, 0], dw],
    ]) quad([a[0], fy, a[1]], [c[0], fy, c[1]], [c[0], ye + 0.04, c[1]], [a[0], ye + 0.04, a[1]], n, [0, 0], [len, 0], [len, 0.36], [0, 0.36], f);
    quad([u0, fy, w0], [u1, fy, w0], [u1, fy, w1], [u0, fy, w1], [0, -1, 0], [0, 0], [du, 0], [du, dw], [0, dw], k);
  }

  // veranda front (or end): piers, arches and balustrade drawn by the shader on one plane
  function screen(a, c, n, y0, y1, bay, doorAt = -1) {
    const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
    const b = bd(MAT.SCREEN, bay, doorAt);
    quad([a[0], y0, a[1]], [c[0], y0, c[1]], [c[0], y1, c[1]], [a[0], y1, a[1]], n, [0, 0], [len, 0], [len, y1 - y0], [0, y1 - y0], b);
  }

  /* villas */
  for (const [u0, u1, wf, vd, depth, arches, porchW] of VILLAS) {
    const main = porchW === 0;
    const wb0 = wf + vd; // front wall of the house
    const wb1 = wb0 + depth;
    const yf = PLINTH;
    const ye = yf + WALL_H;
    const uc = (u0 + u1) / 2;
    // the porch: the whole front of the main house, the middle of the others
    const pu0 = main ? u0 : uc - porchW / 2;
    const pu1 = main ? u1 : uc + porchW / 2;
    const bay = (pu1 - pu0) / arches;
    const ws = wf + 0.25; // line of the columns and arches
    // brick plinths under house and porch, tiled floor on the porch
    box(u0, u1, 0, yf, wb0, wb1, MAT.BRICK, { topData: bd(MAT.FLOOR) });
    box(pu0, pu1, 0, yf, wf, wb0, MAT.BRICK, { topData: bd(MAT.FLOOR), skip: ["back"] });
    // the house: front wall with the door in the middle, windows all round
    box(u0 + 0.35, u1 - 0.35, yf, ye, wb0, wb1, MAT.PLASTER, {
      noTop: true,
      faceData: {
        front: bd(MAT.PLASTER, 100 + (u1 - u0 - 0.7) / 2, main ? 0.95 : 0.75),
        back: bd(MAT.PLASTER, 2, 0.4),
        left: bd(MAT.PLASTER, 2, 0.5),
        right: bd(MAT.PLASTER, 2, 0.5),
      },
    });
    // fluted columns up to the springing line, arches and balustrade between them
    for (let i = 0; i <= arches; i++) column(pu0 + i * bay, ws, yf, yf + SPRING, 0.19, MAT.CREAM);
    column(pu0, wb0 - 0.2, yf, yf + SPRING, 0.19, MAT.CREAM);
    column(pu1, wb0 - 0.2, yf, yf + SPRING, 0.19, MAT.CREAM);
    screen([pu0, ws], [pu1, ws], [0, 0, -1], yf, ye, bay, (pu1 - pu0) / 2);
    screen([pu0, wb0 - 0.2], [pu0, ws], [-1, 0, 0], yf, ye, wb0 - 0.2 - ws);
    screen([pu1, ws], [pu1, wb0 - 0.2], [1, 0, 0], yf, ye, wb0 - 0.2 - ws);
    // steps up to the door
    for (let k = 0; k < 3; k++) {
      const yk = yf * ((k + 1) / 3);
      box(uc - 1.3, uc + 1.3, 0, yk, wf - 0.42 * (3 - k), wf - 0.42 * (2 - k), MAT.FLOOR, { skip: ["back"] });
    }
    // roofs: one over the main house and its veranda; the others get a porch roof of its own
    if (main) hipRoof(u0 - 0.45, u1 + 0.45, wf - 0.4, wb1 + 0.45, ye);
    else {
      hipRoof(u0 - 0.45, u1 + 0.45, wb0 - 0.45, wb1 + 0.45, ye);
      hipRoof(pu0 - 0.4, pu1 + 0.4, wf - 0.4, wb0 + 0.6, ye);
    }
    // the main house carries the sign on a board standing on the front of its roof
    if (main) box(uc - 4.7, uc + 4.7, ye + 0.06, ye + 1.42, wf - 0.62, wf - 0.5, MAT.DARK);
  }

  /* Chicken Bluff pavilion: raised slate floor, pale-blue columns, iron railing, maroon roof */
  {
    const { u0, u1, w0, w1 } = PAVILION;
    const yf = 0.32;
    const ye = yf + 3.1;
    box(u0, u1, 0, yf, w0, w1, MAT.FLOOR);
    const nu = 5;
    const nw = 4;
    for (let i = 0; i <= nu; i++) {
      for (const w of [w0 + 0.3, w1 - 0.3]) column(u0 + 0.3 + (i * (u1 - u0 - 0.6)) / nu, w, yf, ye, 0.2, MAT.PAV_COL);
    }
    for (let j = 1; j < nw; j++) {
      for (const u of [u0 + 0.3, u1 - 0.3]) column(u, w0 + 0.3 + (j * (w1 - w0 - 0.6)) / nw, yf, ye, 0.2, MAT.PAV_COL);
    }
    // railing round the edge, with an opening on the pool side and at the far end
    const rail = (a, c, n) => {
      const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
      quad([a[0], yf, a[1]], [c[0], yf, c[1]], [c[0], yf + 0.95, c[1]], [a[0], yf + 0.95, a[1]], n, [0, 0], [len, 0], [len, 0.95], [0, 0.95], bd(MAT.RAIL));
    };
    rail([u0 + 0.3, w0 + 0.3], [u1 - 0.3, w0 + 0.3], [0, 0, -1]);
    rail([u1 - 0.3, w1 - 0.3], [u0 + 4.5, w1 - 0.3], [0, 0, 1]);
    rail([u1 - 0.3, w0 + 0.3], [u1 - 0.3, w1 - 0.3], [1, 0, 0]);
    // beam and roof
    box(u0 + 0.1, u1 - 0.1, ye - 0.45, ye, w0 + 0.1, w1 - 0.1, MAT.DARK, { noTop: true });
    hipRoof(u0 - 0.6, u1 + 0.6, w0 - 0.6, w1 + 0.6, ye, 0.5);
  }

  /* gatehouse */
  {
    const { u0, u1, w0, w1 } = GATEHOUSE;
    box(u0, u1, 0, 0.6, w0, w1, MAT.BRICK, { noTop: true });
    box(u0 + 0.1, u1 - 0.1, 0.6, 3.2, w0 + 0.1, w1 - 0.1, MAT.PLASTER, {
      noTop: true,
      faceData: { front: bd(MAT.PLASTER, 2, 1.0), back: bd(MAT.PLASTER, 0), left: bd(MAT.PLASTER, 2, 1.0), right: bd(MAT.PLASTER, 0) },
    });
    hipRoof(u0 - 0.5, u1 + 0.5, w0 - 0.5, w1 + 0.5, 3.2);
  }

  /* perimeter wall with the gate, and gate posts */
  const wall = (u0, u1, w0, w1) => box(u0, u1, 0, 2.4, w0, w1, MAT.WALL);
  wall(-58, -6.6, 9, 9.35);
  wall(6.6, 58, 9, 9.35);
  wall(-58.35, -58, 9, 96);
  wall(58, 58.35, 9, 96);
  wall(-58, 58, 95.65, 96);
  for (const u of [-7.1, 7.1]) {
    box(u - 0.5, u + 0.5, 0, 2.9, 8.7, 9.7, MAT.PLASTER);
    box(u - 0.62, u + 0.62, 2.9, 3.12, 8.58, 9.82, MAT.CREAM);
  }

  return { position: P, normal: N, fc: F, bdata: B };
}
