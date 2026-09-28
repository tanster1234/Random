// World layout for "Wheels Down". Units are metres. y is up, the approach flies toward -z.
// Lungi is on the near shore; Freetown's hills rise across the estuary to the east (+x).
import { rng, makePath, smoothstep, clamp } from "./util.js";

export const REGION = { x0: -1500, z0: -4500, size: 6000 }; // baked light/albedo maps

export const CITY = { x: 9000, z: -5000, zSpread: 9000 };
export const MOON = { bearing: 27, elev: 6.5 };

export const RUNWAY = { halfW: 22.5, len: 3200 };

export const ROAD_POINTS = [
  [680, -1600],
  [900, -1660],
  [1200, -1780],
  [1550, -1960],
  [1950, -2190],
  [2350, -2420],
  [2720, -2620],
  [3060, -2790],
  [3380, -2950],
  [3750, -3150],
  [4150, -3380],
];

export const road = makePath(ROAD_POINTS, 28);

// The resort gate sits on the road; the compound opens to the right of the road.
export const GATE_S = (() => {
  // arc length nearest to the gate point
  let best = 0;
  let bd = Infinity;
  for (let s = 0; s < road.total; s += 2) {
    const p = road.at(s);
    const d = Math.hypot(p.x - 3060, p.z + 2790);
    if (d < bd) {
      bd = d;
      best = s;
    }
  }
  return best;
})();

export function resortFrame() {
  const g = road.at(GATE_S);
  // local (u along road, w to the right) → world
  const toWorld = (u, w) => [g.x + g.dx * u + g.rx * w, g.z + g.dz * u + g.rz * w];
  const rotY = Math.atan2(g.dx, g.dz); // yaw so local +z aligns with road direction
  return { g, toWorld, rotY };
}

/* ------------------------------------------------------------------ hills */
export function shoreX(z) {
  return 6900 + 350 * Math.sin(z * 0.00031) + 180 * Math.sin(z * 0.00083 + 1.3) + 90 * Math.sin(z * 0.0021 + 0.4);
}
export const SHORE_GLSL = `6900.0 + 350.0 * sin(z * 0.00031) + 180.0 * sin(z * 0.00083 + 1.3) + 90.0 * sin(z * 0.0021 + 0.4)`;
export const HILLS_Z = [-26000, 10500];

function noise1(seed) {
  const R = rng(seed);
  const tab = new Float32Array(512);
  for (let i = 0; i < 512; i++) tab[i] = R();
  return (x) => {
    const i = Math.floor(x);
    const f = x - i;
    const s = f * f * (3 - 2 * f);
    const a = tab[((i % 512) + 512) % 512];
    const b = tab[(((i + 1) % 512) + 512) % 512];
    return a + (b - a) * s;
  };
}
const n1a = noise1(11);
const n1b = noise1(12);
const n1c = noise1(13);
const n1d = noise1(14);
const fbm1 = (x) => (n1a(x) * 0.55 + n1b(x * 2.1) * 0.27 + n1c(x * 4.3) * 0.12 + n1d(x * 8.7) * 0.06) / 1.0;

export function hillHeight(t, z) {
  // t = metres inland from the far shore
  const ridge = 3500 + 900 * (n1b(z * 0.00019 + 3.1) - 0.5) * 2;
  const profile = Math.exp(-(((t - ridge) / 2400) ** 2));
  const foot = smoothstep(0, 650, t);
  const base = 420 + 760 * fbm1(z * 0.00012 + 7.0);
  const detail = 90 * (fbm1(t * 0.0021 + z * 0.0011) - 0.5) + 55 * (n1c(z * 0.0026 + t * 0.0007) - 0.5);
  const ends = smoothstep(HILLS_Z[0], HILLS_Z[0] + 4000, z) * (1 - smoothstep(HILLS_Z[1] - 5000, HILLS_Z[1], z));
  const lowSlope = 70 * smoothstep(0, 900, t) * (1 - smoothstep(900, 2600, t));
  return (base * profile * foot + detail * foot + lowSlope) * ends - 10 * (1 - foot);
}

/* ------------------------------------------------------------------ lights */
// light record: [x, y, z, r, g, b, size(m), type, phase, group]
// types: 0 steady, 1 sequenced flasher, 2 strobe, 3 beacon, 4 twinkle
const WHITE = [1.0, 0.92, 0.78];
const LED = [0.86, 0.92, 1.0];
const SODIUM = [1.0, 0.66, 0.36];
const WARM = [1.0, 0.76, 0.46];
const GREEN = [0.25, 1.0, 0.5];
const RED = [1.0, 0.16, 0.1];
const BLUE = [0.25, 0.45, 1.0];
const POOL = [0.35, 0.95, 1.0];

export function buildWorld(opts = {}) {
  const mobile = !!opts.mobile;
  const R = rng(20260928);
  const lights = [];
  const pools = []; // baked ground light: [x, z, radius, r, g, b, strength]
  const L = (x, y, z, c, size, type = 0, phase = 0, group = 0) => lights.push([x, y, z, c[0], c[1], c[2], size, type, phase, group]);
  const P = (x, z, radius, c, k = 1) => pools.push([x, z, radius, c[0], c[1], c[2], k]);

  /* runway */
  for (let z = 0; z >= -RUNWAY.len; z -= 60) {
    L(-24, 0.6, z, WHITE, 1.6);
    L(24, 0.6, z, WHITE, 1.6);
    P(-24, z, 7, WHITE, 0.35);
    P(24, z, 7, WHITE, 0.35);
  }
  for (let z = -15; z >= -RUNWAY.len; z -= 30) {
    const fromEnd = RUNWAY.len + z;
    const c = fromEnd < 300 ? RED : fromEnd < 900 && Math.round(z / 30) % 2 ? RED : WHITE;
    L(0, 0.3, z, c, 0.6);
  }
  for (let x = -21; x <= 21; x += 3) {
    L(x, 0.5, 2, GREEN, 1.4);
    L(x, 0.5, -RUNWAY.len - 2, RED, 1.3);
  }
  P(0, 2, 26, GREEN, 0.4);
  // touchdown zone barrettes
  for (let z = -30; z >= -900; z -= 30) {
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) L(s * (4.5 + k * 1.5), 0.3, z, WHITE, 0.45);
  }
  // PAPI (on glide path: two white, two red)
  [WHITE, WHITE, RED, RED].forEach((c, i) => L(-40 - i * 9, 1.0, -300, c, 2.2));

  /* approach lighting: centre line + crossbar + sequenced flashers */
  for (let z = 30; z <= 900; z += 30) {
    for (let k = -2; k <= 2; k++) L(k * 1.1, 1.5, z, WHITE, 1.1);
    L(0, 2.0, z, [1, 1, 1], 1.8, 1, (900 - z) / 900 * 0.55, 1);
    P(0, z, 9, WHITE, 0.35);
  }
  for (let x = -15; x <= 15; x += 1.5) L(x, 1.5, 300, WHITE, 1.1);

  /* taxiway + apron + terminal */
  for (let x = 40; x <= 250; x += 30) {
    L(x, 0.4, -1588, BLUE, 1.1);
    L(x, 0.4, -1612, BLUE, 1.1);
  }
  for (let z = -1320; z >= -1880; z -= 40) L(250, 0.4, z, BLUE, 1.0);
  for (const z of [-1380, -1500, -1620, -1740, -1860]) {
    L(420, 24, z, [1.0, 0.86, 0.66], 4.5);
    P(420, z, 75, [1.0, 0.8, 0.55], 0.9);
  }
  // curb + car park on the landside
  for (let z = -1400; z >= -1800; z -= 50) {
    L(640, 8, z, SODIUM, 2.2);
    P(640, z, 28, SODIUM, 0.9);
  }
  // control tower beacon
  L(520, 32, -1300, [0.4, 1.0, 0.6], 3.2, 3, 0.1);
  L(520, 32, -1300, [1, 1, 1], 3.2, 3, 0.6);

  /* roadside life along Airport-Ferry Road */
  const tot = road.total;
  let side = 1;
  for (let s = 40; s < tot - 60; s += 64 + R() * 22) {
    const p = road.at(s);
    if (Math.abs(s - GATE_S) < 40) continue;
    side = -side;
    const off = side * 8;
    const x = p.x + p.rx * off;
    const z = p.z + p.rz * off;
    const c = R() < 0.55 ? LED : SODIUM;
    if (R() < 0.9) {
      L(x, 7, z, c, 1.9);
      P(x - p.rx * off * 0.4, z - p.rz * off * 0.4, 20, c, 0.75);
    }
  }
  const houses = [];
  for (let s = 120; s < tot - 40; s += 55 + R() * 90) {
    if (Math.abs(s - GATE_S) < 150) continue;
    const p = road.at(s);
    const cluster = 1 + Math.floor(R() * 3);
    for (let k = 0; k < cluster; k++) {
      const sd = R() < 0.5 ? -1 : 1;
      const dist = 20 + R() * 45;
      const along = (R() - 0.5) * 50;
      const x = p.x + p.rx * sd * dist + p.dx * along;
      const z = p.z + p.rz * sd * dist + p.dz * along;
      const shop = R() < 0.18;
      const w = shop ? 12 : 7 + R() * 3;
      const d = shop ? 8 : 5 + R() * 2;
      const h = shop ? 4 : 3.1;
      houses.push({ x, z, w, d, h, rot: Math.atan2(p.dx, p.dz) + (R() - 0.5) * 0.3, lit: shop ? 0.9 : 0.35 + R() * 0.4, shop });
      const bulbC = shop ? LED : WARM;
      L(x - p.rx * sd * (d * 0.5 + 1), 2.6, z - p.rz * sd * (d * 0.5 + 1), bulbC, shop ? 1.8 : 1.2);
      P(x - p.rx * sd * (d * 0.5 + 3), z - p.rz * sd * (d * 0.5 + 3), shop ? 20 : 11, bulbC, shop ? 0.9 : 0.55);
    }
  }
  // scattered homes across Lungi (visible on the approach)
  const nVillage = mobile ? 380 : 700;
  for (let i = 0; i < nVillage; i++) {
    let x;
    let z;
    // clusters
    const cx = [-1800, 900, 2600, -600, 3400, 1600, -2600][i % 7];
    const cz = [3600, 2600, 4200, -1200, -900, 400, -3000][i % 7];
    x = cx + (R() + R() + R() - 1.5) * 1400;
    z = cz + (R() + R() + R() - 1.5) * 1400;
    if (Math.abs(x) < 120 && z < 950 && z > -3300) continue; // keep runway strip clear
    if (x > 4100 || z > 5000) continue;
    const c = R() < 0.72 ? WARM : R() < 0.5 ? LED : SODIUM;
    L(x, 2.5, z, c, 1.1 + R() * 0.8, 4, R());
    P(x, z, 9, c, 0.5);
  }

  /* the resort — compound opens off the right side of the road; the main house sits at the
     far end, facing back down the road, so arriving guests see its lit front and sign */
  const { g, toWorld, rotY } = resortFrame();
  const resort = { g, toWorld, rotY, blocks: [], palms: [], pool: null, sign: null };
  const RW = (u, w) => toWorld(u, w);
  const wall = (u0, w0, u1, w1) => resort.blocks.push({ u0, w0, u1, w1, h: 2.2, type: 3, win: 0, lit: 0 });
  wall(-64, 9, -7, 9.5); // road side, with the gate gap
  wall(7, 9, 64, 9.5);
  wall(-64, 9, -63.5, 104); // near end
  wall(63.5, 9, 64, 104); // far end
  wall(-64, 103.5, 64, 104); // back
  // main house: two storeys along the far end, front facing back down the road (-u)
  resort.blocks.push({ u0: 40, w0: 18, u1: 55, w1: 96, h: 10.2, type: 2, win: 3, lit: 0.96, front: -1 });
  // reception by the gate
  resort.blocks.push({ u0: -34, w0: 16, u1: -16, w1: 32, h: 4.2, type: 2, win: 3, lit: 1.0 });
  // Chicken Bluff: open pavilion beside the pool
  resort.blocks.push({ u0: 12, w0: 66, u1: 30, w1: 84, h: 4.4, type: 4, win: 0, lit: 0, roofOnly: true, y0: 3.6 });
  for (const [u, w] of [[13, 67], [29, 67], [13, 83], [29, 83]]) resort.blocks.push({ u0: u - 0.25, w0: w - 0.25, u1: u + 0.25, w1: w + 0.25, h: 3.6, type: 3, win: 0, lit: 0 });
  // pool in the courtyard
  resort.pool = { u: 4, w: 54, lu: 22, lw: 9 };

  // gate lamps
  for (const u of [-8, 8]) {
    const [x, z] = RW(u, 8.6);
    L(x, 3.0, z, WARM, 2.0);
    P(x, z, 16, WARM, 1.0);
  }
  // driveway bollards from the gate to the house
  for (let k = 0; k < 9; k++) {
    const u = -2 + k * 4.6;
    for (const w of [17, 27]) {
      const [x, z] = RW(u, w);
      L(x, 0.8, z, WARM, 0.75);
      P(x, z, 5, WARM, 0.6);
    }
  }
  // facade uplights along the front of the house
  for (let w = 21; w <= 93; w += 8) {
    const [x, z] = RW(39.4, w);
    L(x, 0.5, z, [1.0, 0.82, 0.58], 0.9);
    P(x, z, 8, [1.0, 0.8, 0.55], 0.8);
  }
  // wall lamps
  for (let u = -56; u <= 56; u += 14) {
    if (Math.abs(u) < 12) continue;
    const [x, z] = RW(u, 10.0);
    L(x, 2.5, z, WARM, 0.9);
    P(x, z, 7, WARM, 0.45);
  }
  // pavilion pendants
  for (const [u, w] of [[16, 70], [21, 70], [26, 70], [16, 75], [21, 75], [26, 75], [16, 80], [21, 80], [26, 80]]) {
    const [x, z] = RW(u, w);
    L(x, 3.1, z, [1.0, 0.72, 0.4], 0.85);
  }
  {
    const [x, z] = RW(21, 75);
    P(x, z, 16, [1.0, 0.7, 0.4], 1.2);
    const [px, pz] = RW(resort.pool.u, resort.pool.w);
    P(px, pz, 20, POOL, 1.1);
    L(px, 1.2, pz, POOL, 15, 0, 0, 2);
    const [ex, ez] = RW(38, 56);
    P(ex, ez, 22, [1.0, 0.85, 0.62], 1.2);
    const [rx, rz] = RW(-25, 34);
    P(rx, rz, 13, [1.0, 0.85, 0.62], 0.8);
  }
  // uplit palms
  // kept clear of the sightline from the road to the sign
  const palmSpots = [
    [-10, 13], [10, 13], [-24, 34], [-40, 60], [-48, 86], [-56, 20], [52, 12], [58, 100], [0, 98], [-30, 98],
    [22, 96], [34, 30], [34, 90], [-12, 72], [-2, 80], [18, 66], [8, 32], [-20, 78], [26, 28], [44, 104],
  ];
  palmSpots.forEach(([u, w], i) => {
    const [x, z] = RW(u + (R() - 0.5) * 2, w + (R() - 0.5) * 2);
    resort.palms.push({ x, z, h: 11 + R() * 7, idx: i % 4, flip: R() < 0.5 ? -1 : 1, up: 1.0, tint: [1.0, 0.72, 0.42] });
    P(x, z, 5, [1.0, 0.72, 0.42], 0.9);
  });
  // sign on the front of the house, above the entrance
  resort.sign = { u: 39.7, w: 57, y: 8.72, width: 12, height: 3.0 };

  /* roadside + village palms (silhouettes) */
  const palms = [];
  for (let s = 30; s < tot; s += 26 + R() * 40) {
    const p = road.at(s);
    if (Math.abs(s - GATE_S) < 80) continue;
    const sd = R() < 0.5 ? -1 : 1;
    const dist = 14 + R() * 60;
    palms.push({ x: p.x + p.rx * sd * dist, z: p.z + p.rz * sd * dist, h: 9 + R() * 9, idx: Math.floor(R() * 4), flip: R() < 0.5 ? -1 : 1, up: 0, tint: [0, 0, 0] });
  }
  const nWild = mobile ? 260 : 520;
  for (let i = 0; i < nWild; i++) {
    const x = -2200 + R() * 6200;
    const z = -4200 + R() * 9000;
    if (Math.abs(x) < 160 && z < 1100 && z > -3400) continue;
    if (x > 250 && x < 720 && z < -1250 && z > -1950) continue;
    palms.push({ x, z, h: 9 + R() * 11, idx: Math.floor(R() * 4), flip: R() < 0.5 ? -1 : 1, up: 0, tint: [0, 0, 0] });
  }
  // along the near shore of the approach
  for (let i = 0; i < (mobile ? 120 : 240); i++) {
    const x = -3000 + R() * 7000;
    const z = 4600 + R() * 500;
    palms.push({ x, z, h: 10 + R() * 9, idx: Math.floor(R() * 4), flip: R() < 0.5 ? -1 : 1, up: 0, tint: [0, 0, 0] });
  }

  /* Freetown: lights on the far shore and the lower slopes, in neighbourhoods */
  const nCity = mobile ? 2600 : 4600;
  const hood = (t, z) => n1a(z * 0.00055 + t * 0.00031) * 0.6 + n1c(z * 0.0013 - t * 0.0009 + 5.0) * 0.4;
  let placed = 0;
  let guard = 0;
  while (placed < nCity && guard++ < nCity * 12) {
    let z;
    if (R() < 0.66) z = CITY.z + (R() + R() + R() + R() - 2) * CITY.zSpread * 0.85;
    else z = HILLS_Z[0] + 3000 + R() * (HILLS_Z[1] - HILLS_Z[0] - 6000);
    z = clamp(z, HILLS_Z[0] + 2500, HILLS_Z[1] - 3000);
    const t = 25 + Math.pow(R(), 2.1) * 2600;
    const keep = hood(t, z) - t / 5200;
    if (keep < 0.36 + R() * 0.12) continue;
    const x = shoreX(z) + t;
    const y = Math.max(hillHeight(t, z), 0) + 5;
    const k = R();
    const c = k < 0.6 ? SODIUM : k < 0.88 ? [1.0, 0.84, 0.6] : LED;
    L(x - 22, y, z, c, 3.2 + Math.pow(R(), 3) * 9, 4, R(), 0);
    placed++;
  }
  // the waterfront road
  for (let z = HILLS_Z[0] + 5000; z < HILLS_Z[1] - 4000; z += 55 + R() * 40) {
    if (Math.abs(z - CITY.z) > 14000 && R() < 0.5) continue;
    L(shoreX(z) + 18, 6, z, SODIUM, 4.5, 4, R(), 0);
  }
  // harbour / ferry terminal
  for (let i = 0; i < 40; i++) {
    const z = -2200 + (R() - 0.5) * 900;
    L(shoreX(z) - 10 + R() * 60, 4 + R() * 18, z, [1.0, 0.93, 0.82], 7 + R() * 6, 4, R(), 0);
  }

  return { lights, pools, houses, palms, resort };
}

/* ------------------------------------------------------------------ baking */
export function bakeMaps(world, res) {
  const { x0, z0, size } = REGION;
  const toPx = (x, z) => [((x - x0) / size) * res, ((z - z0) / size) * res];
  const m = res / size;

  // albedo (premultiplied use in shader; transparent = procedural land)
  const ac = document.createElement("canvas");
  ac.width = ac.height = res;
  const a = ac.getContext("2d");
  a.clearRect(0, 0, res, res);
  const rect = (xa, za, xb, zb, col) => {
    const [px, pz] = toPx(Math.min(xa, xb), Math.min(za, zb));
    a.fillStyle = col;
    a.fillRect(px, pz, Math.abs(xb - xa) * m, Math.abs(zb - za) * m);
  };
  rect(-30, 60, 30, -RUNWAY.len - 60, "rgb(22,22,24)"); // runway + stopways
  rect(-RUNWAY.halfW, 0, RUNWAY.halfW, -RUNWAY.len, "rgb(14,14,16)");
  rect(20, -1588, 252, -1612, "rgb(26,26,28)"); // taxiway
  rect(250, -1300, 560, -1900, "rgb(52,52,54)"); // apron
  rect(610, -1380, 700, -1820, "rgb(44,42,40)"); // curb / car park
  // road (laterite)
  a.lineCap = "round";
  a.lineJoin = "round";
  a.strokeStyle = "rgb(92,48,28)";
  a.lineWidth = 11 * m;
  a.beginPath();
  road.pts.forEach((p, i) => {
    const [px, pz] = toPx(p[0], p[1]);
    if (i === 0) a.moveTo(px, pz);
    else a.lineTo(px, pz);
  });
  a.stroke();
  a.strokeStyle = "rgb(70,52,40)";
  a.lineWidth = 4 * m;
  // resort compound paving + driveway
  const { toWorld } = world.resort;
  const poly = (pts, col) => {
    a.fillStyle = col;
    a.beginPath();
    pts.forEach(([u, w], i) => {
      const [x, z] = toWorld(u, w);
      const [px, pz] = toPx(x, z);
      if (i === 0) a.moveTo(px, pz);
      else a.lineTo(px, pz);
    });
    a.closePath();
    a.fill();
  };
  poly([[-64, 9], [64, 9], [64, 104], [-64, 104]], "rgb(38,50,32)"); // garden lawn
  poly([[-7, 2], [7, 2], [7, 17], [-7, 17]], "rgb(92,82,70)"); // gate apron
  poly([[-7, 17], [40, 17], [40, 27], [-7, 27]], "rgb(92,82,70)"); // driveway to the house
  poly([[-12, 45], [20, 45], [20, 63], [-12, 63]], "rgb(124,112,96)"); // pool deck
  poly([[33, 15], [40, 15], [40, 99], [33, 99]], "rgb(108,98,84)"); // front terrace
  poly([[9, 63], [33, 63], [33, 87], [9, 87]], "rgb(100,86,72)"); // restaurant terrace
  // houses footprints (dirt yards)
  a.fillStyle = "rgb(60,44,32)";
  for (const h of world.houses) {
    const [px, pz] = toPx(h.x, h.z);
    a.beginPath();
    a.arc(px, pz, 14 * m, 0, Math.PI * 2);
    a.fill();
  }

  // light map (additive)
  const lc = document.createElement("canvas");
  lc.width = lc.height = res;
  const l = lc.getContext("2d");
  l.fillStyle = "#000";
  l.fillRect(0, 0, res, res);
  l.globalCompositeOperation = "lighter";
  for (const [x, z, r, cr, cg, cb, k] of world.pools) {
    const [px, pz] = toPx(x, z);
    const rad = Math.max(1.5, r * m);
    const gr = l.createRadialGradient(px, pz, 0, px, pz, rad);
    const col = `${(cr * 255) | 0},${(cg * 255) | 0},${(cb * 255) | 0}`;
    const kk = Math.min(1, k);
    gr.addColorStop(0, `rgba(${col},${kk})`);
    gr.addColorStop(0.3, `rgba(${col},${kk * 0.42})`);
    gr.addColorStop(0.65, `rgba(${col},${kk * 0.1})`);
    gr.addColorStop(1, `rgba(${col},0)`);
    l.fillStyle = gr;
    l.fillRect(px - rad, pz - rad, rad * 2, rad * 2);
  }
  return { albedo: ac, light: lc };
}
