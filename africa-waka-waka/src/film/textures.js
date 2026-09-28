import {
  DataTexture,
  RGBAFormat,
  UnsignedByteType,
  RepeatWrapping,
  ClampToEdgeWrapping,
  LinearFilter,
  LinearMipmapLinearFilter,
  CanvasTexture,
} from "three";
import { rng } from "./util.js";

function hash2(x, y, seed) {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

function tiledNoise(x, y, period, seed) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const m = (v) => ((v % period) + period) % period;
  const a = hash2(m(x0), m(y0), seed);
  const b = hash2(m(x0 + 1), m(y0), seed);
  const c = hash2(m(x0), m(y0 + 1), seed);
  const d = hash2(m(x0 + 1), m(y0 + 1), seed);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

function fbm(i, j, size, base, octaves, seed, ox = 0, oy = 0) {
  let v = 0;
  let amp = 0.5;
  let tot = 0;
  for (let o = 0; o < octaves; o++) {
    const period = base << o;
    const sc = period / size;
    v += tiledNoise((i + ox) * sc, (j + oy) * sc, period, seed + o * 31) * amp;
    tot += amp;
    amp *= 0.5;
  }
  return v / tot;
}

function dataTex(data, size, repeat = true) {
  const t = new DataTexture(data, size, size, RGBAFormat, UnsignedByteType);
  t.wrapS = t.wrapT = repeat ? RepeatWrapping : ClampToEdgeWrapping;
  t.magFilter = LinearFilter;
  t.minFilter = LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.needsUpdate = true;
  return t;
}

/** RGBA tileable noise: R,G = fbm (different seeds), B = fine noise, A = medium noise. */
export function makeNoiseTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const k = (j * size + i) * 4;
      data[k] = fbm(i, j, size, 4, 5, 7) * 255;
      data[k + 1] = fbm(i, j, size, 4, 5, 91, 37, 11) * 255;
      data[k + 2] = tiledNoise((i * 64) / size, (j * 64) / size, 64, 5) * 255;
      data[k + 3] = fbm(i, j, size, 16, 3, 55) * 255;
    }
  }
  return dataTex(data, size);
}

/** Tileable ripple normal map for the estuary (RG = normal xz, B = height). */
export function makeWaterNormals(size = 256) {
  const h = new Float32Array(size * size);
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      // long swell + chop
      const a = fbm(i, j, size, 4, 3, 301);
      const b = fbm(i, j, size, 16, 3, 777, 13, 29);
      h[j * size + i] = a * 0.65 + b * 0.35;
    }
  }
  const data = new Uint8Array(size * size * 4);
  const at = (i, j) => h[((j + size) % size) * size + ((i + size) % size)];
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const dx = (at(i + 1, j) - at(i - 1, j)) * 6;
      const dz = (at(i, j + 1) - at(i, j - 1)) * 6;
      const k = (j * size + i) * 4;
      data[k] = Math.max(0, Math.min(255, (dx * 0.5 + 0.5) * 255));
      data[k + 1] = Math.max(0, Math.min(255, (dz * 0.5 + 0.5) * 255));
      data[k + 2] = at(i, j) * 255;
      data[k + 3] = 255;
    }
  }
  return dataTex(data, size);
}

/** Four palm silhouettes in a 4×1 atlas (alpha mask). */
export function makePalmAtlas() {
  const W = 256;
  const H = 512;
  const c = document.createElement("canvas");
  c.width = W * 4;
  c.height = H;
  const g = c.getContext("2d");
  g.fillStyle = "#000";
  g.strokeStyle = "#000";
  const R = rng(4242);
  for (let n = 0; n < 4; n++) {
    const ox = n * W;
    const baseX = ox + W * 0.5 + (R() - 0.5) * 20;
    const baseY = H;
    const lean = (R() - 0.5) * 70 + (n % 2 ? 26 : -22);
    const crownX = baseX + lean;
    const crownY = H * (0.2 + R() * 0.06);
    const ctrlX = baseX + lean * 0.15 + (R() - 0.5) * 20;
    const ctrlY = H * 0.55;
    // trunk: tapered ribbon along a quadratic curve
    const steps = 40;
    const left = [];
    const right = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = (1 - t) * (1 - t) * baseX + 2 * (1 - t) * t * ctrlX + t * t * crownX;
      const y = (1 - t) * (1 - t) * baseY + 2 * (1 - t) * t * ctrlY + t * t * crownY;
      const tx = 2 * (1 - t) * (ctrlX - baseX) + 2 * t * (crownX - ctrlX);
      const ty = 2 * (1 - t) * (ctrlY - baseY) + 2 * t * (crownY - ctrlY);
      const tl = Math.hypot(tx, ty) || 1;
      const w = 9 - t * 4.2 + (s % 4 === 0 ? 0.8 : 0);
      left.push([x - (ty / tl) * w, y + (tx / tl) * w]);
      right.push([x + (ty / tl) * w, y - (tx / tl) * w]);
    }
    g.beginPath();
    g.moveTo(left[0][0], left[0][1]);
    for (const p of left) g.lineTo(p[0], p[1]);
    for (let s = right.length - 1; s >= 0; s--) g.lineTo(right[s][0], right[s][1]);
    g.closePath();
    g.fill();
    // fronds
    const fronds = 11 + Math.floor(R() * 4);
    for (let f = 0; f < fronds; f++) {
      const ang = (f / fronds) * Math.PI * 2 + R() * 0.4;
      const spread = Math.cos(ang); // -1..1 left/right
      const depth = Math.sin(ang); // toward/away (foreshortening)
      const len = 118 + R() * 44;
      const dirX = spread * len * (0.85 + 0.15 * Math.abs(depth));
      const up = 26 + R() * 30 - Math.abs(depth) * 14;
      const droop = 70 + R() * 50;
      const x0 = crownX;
      const y0 = crownY;
      const cx = x0 + dirX * 0.45;
      const cy = y0 - up;
      const x1 = x0 + dirX;
      const y1 = y0 - up * 0.2 + droop * (0.6 + Math.abs(spread) * 0.4);
      // rachis
      g.lineWidth = 3.2;
      g.beginPath();
      g.moveTo(x0, y0);
      g.quadraticCurveTo(cx, cy, x1, y1);
      g.stroke();
      // leaflets
      const leaves = 26;
      for (let l = 1; l < leaves; l++) {
        const t = l / leaves;
        const px = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
        const py = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y1;
        const tx = 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx);
        const ty = 2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy);
        const tl = Math.hypot(tx, ty) || 1;
        const nx = -ty / tl;
        const ny = tx / tl;
        const ll = (1 - t * 0.7) * (28 + R() * 9);
        g.lineWidth = 2.8 - t * 1.4;
        for (const side of [-1, 1]) {
          g.beginPath();
          g.moveTo(px, py);
          const ex = px + nx * ll * side * 0.75 + (tx / tl) * ll * 0.35;
          const ey = py + ny * ll * side * 0.75 + ll * 0.55; // gravity
          g.quadraticCurveTo(px + nx * ll * side * 0.5, py + ny * ll * side * 0.2, ex, ey);
          g.stroke();
        }
      }
    }
    // coconuts
    for (let k = 0; k < 5; k++) {
      g.beginPath();
      g.arc(crownX + (R() - 0.5) * 16, crownY + 6 + R() * 8, 4.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = ClampToEdgeWrapping;
  t.minFilter = LinearMipmapLinearFilter;
  t.magFilter = LinearFilter;
  t.anisotropy = 4;
  return t;
}

/** The illuminated resort sign. */
export function makeSignTexture(fontFamily) {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 256;
  const g = c.getContext("2d");
  g.clearRect(0, 0, c.width, c.height);
  g.textAlign = "center";
  g.textBaseline = "middle";
  const text = "AFRICA WAKA WAKA";
  let size = 96;
  if ("letterSpacing" in g) g.letterSpacing = "6px";
  do {
    g.font = `600 ${size}px ${fontFamily}`;
    size -= 2;
  } while (g.measureText(text).width > 900 && size > 40);
  g.shadowColor = "rgba(255, 206, 140, 0.95)";
  g.shadowBlur = 34;
  g.fillStyle = "rgba(255, 238, 210, 1)";
  g.fillText(text, 512, 118);
  g.shadowBlur = 10;
  g.fillText(text, 512, 118);
  g.shadowBlur = 0;
  g.font = `600 28px ${fontFamily}`;
  if ("letterSpacing" in g) g.letterSpacing = "14px";
  g.fillStyle = "rgba(255, 214, 150, 0.9)";
  g.fillText("LUNGI · SIERRA LEONE", 512, 206);
  const t = new CanvasTexture(c);
  t.minFilter = LinearMipmapLinearFilter;
  t.magFilter = LinearFilter;
  t.anisotropy = 4;
  return t;
}
