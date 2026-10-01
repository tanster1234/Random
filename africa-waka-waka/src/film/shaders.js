// GLSL for the "Wheels Down" night film. Written GLSL1-style; three.js maps it to WebGL2.

export const COMMON = /* glsl */ `
uniform float uTime;
uniform vec3 uMoonDir;
uniform vec2 uCityDir;
uniform float uCityBearing;
uniform float uCitySpread;
uniform float uCityElTop;
uniform sampler2D uNoise;
uniform float uFog;

float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }

vec3 skyColor(vec3 dir){
  float h = dir.y;
  float hp = max(h, 0.0);
  vec3 zenith  = vec3(0.008, 0.016, 0.040);
  vec3 mid     = vec3(0.020, 0.038, 0.086);
  vec3 horizon = vec3(0.085, 0.098, 0.145);
  vec3 col = mix(horizon, mid, smoothstep(0.0, 0.20, hp));
  col = mix(col, zenith, smoothstep(0.16, 0.9, hp));
  // Freetown's glow on the horizon
  vec2 dxz = normalize(dir.xz + vec2(1e-5));
  float ca = max(dot(dxz, uCityDir), 0.0);
  col += vec3(0.34, 0.16, 0.06) * pow(ca, 5.0) * (exp(-hp * 11.0) * 0.5 + exp(-hp * 40.0) * 0.35);
  // warm haze low everywhere
  col += vec3(0.045, 0.034, 0.032) * exp(-hp * 26.0);
  // moon glow
  float md = max(dot(dir, uMoonDir), 0.0);
  col += vec3(0.52, 0.50, 0.44) * (pow(md, 9.0) * 0.06 + pow(md, 90.0) * 0.18 + pow(md, 1400.0) * 0.45);
  if (h < 0.0) col = mix(horizon * 0.85, vec3(0.010, 0.015, 0.026), smoothstep(0.0, -0.12, h));
  return col;
}

vec3 fogColor(vec3 v){ return skyColor(normalize(vec3(v.x, 0.012, v.z))); }

vec3 applyFog(vec3 col, vec3 wp){
  vec3 d = wp - cameraPosition;
  float dist = length(d);
  float f = 1.0 - exp(-dist * uFog);
  return mix(col, fogColor(d / dist), f);
}

vec3 dither(vec3 c){ return c + (hash12(gl_FragCoord.xy + fract(uTime * 7.0) * 91.0) - 0.5) / 255.0; }
`;

export const LIGHTING = /* glsl */ `
uniform vec4 uRegion;
uniform sampler2D uLightMap;
uniform float uLightGain;
uniform vec3 uSpotPos[2];
uniform vec3 uSpotDir[2];
uniform vec3 uSpotCol[2];
uniform vec2 uSpotCone[2];
uniform float uSpotRange[2];

vec2 regionUV(vec2 xz){ return (xz - uRegion.xy) / uRegion.zw; }
float inRegion(vec2 uv){ return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0); }
vec3 bakedLight(vec2 xz){ vec2 uv = regionUV(xz); return texture2D(uLightMap, uv).rgb * uLightGain * inRegion(uv); }

vec3 spot(vec3 sp, vec3 sd, vec3 sc, vec2 cone, float range, vec3 wp, vec3 n){
  vec3 L = sp - wp;
  float d = length(L);
  L /= max(d, 1e-3);
  float cd = dot(-L, sd);
  float c = smoothstep(cone.x, cone.y, cd);
  float att = 1.0 / (1.0 + d * d * 0.0011) * (1.0 - smoothstep(range * 0.5, range, d));
  return sc * c * att * max(dot(n, L), 0.0);
}

vec3 sceneLight(vec3 wp, vec3 n){
  vec3 amb = vec3(0.15, 0.18, 0.26) * (0.5 + 0.5 * max(dot(n, uMoonDir), 0.0));
  vec3 l = amb + bakedLight(wp.xz);
  l += spot(uSpotPos[0], uSpotDir[0], uSpotCol[0], uSpotCone[0], uSpotRange[0], wp, n);
  l += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], wp, n);
  return l;
}
`;

const WORLD_VERT = /* glsl */ `
varying vec3 vWorld;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

/* ---------------------------------------------------------------- sky */
export const SKY = {
  vertex: /* glsl */ `
    varying vec3 vDir;
    void main(){
      vDir = position;
      vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = p.xyww;
    }`,
  fragment: COMMON + /* glsl */ `
    varying vec3 vDir;
    float starField(vec3 dir){
      vec3 p = dir * 290.0;
      vec3 id = floor(p);
      float h = hash13(id);
      if (h < 0.9915) return 0.0;
      vec3 c = id + 0.5 + (hash33(id) - 0.5) * 0.7;
      float d = length(p - c);
      float b = (h - 0.9915) / 0.0085;
      float tw = 0.62 + 0.38 * sin(uTime * (1.3 + 3.0 * b) + h * 97.0);
      return smoothstep(0.32, 0.0, d) * (0.18 + b * b * 1.5) * tw;
    }
    void main(){
      vec3 dir = normalize(vDir);
      vec3 col = skyColor(dir);
      // Milky-way-ish band of faint dust
      float band = exp(-pow(dot(dir, normalize(vec3(0.35, 0.6, 0.72))), 2.0) * 14.0);
      col += vec3(0.020, 0.022, 0.032) * band * texture2D(uNoise, dir.xz * 1.4 + dir.y).r * smoothstep(0.05, 0.4, dir.y);
      col += vec3(0.88, 0.92, 1.0) * starField(dir) * smoothstep(0.015, 0.14, dir.y) * (1.0 - smoothstep(0.9993, 0.9999, dot(dir, uMoonDir)) * 0.0);
      float md = dot(dir, uMoonDir);
      float disc = smoothstep(0.999915, 0.999945, md);
      if (disc > 0.0) {
        vec3 t = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
        vec3 b = cross(t, uMoonDir);
        vec2 mu = vec2(dot(dir, t), dot(dir, b)) / 0.0116;
        float maria = texture2D(uNoise, mu * 0.33 + 0.37).r;
        float limb = sqrt(max(0.0, 1.0 - dot(mu, mu)));
        vec3 mc = vec3(1.0, 0.95, 0.84) * (1.12 - smoothstep(0.5, 0.72, maria) * 0.14) * (0.86 + 0.14 * limb);
        col = mix(col, mc, disc);
      }
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- water + land */
export const SURFACE = {
  vertex: WORLD_VERT,
  fragment: COMMON + LIGHTING + /* glsl */ `
    uniform sampler2D uWaterN;
    uniform sampler2D uAlbedo;
    uniform vec4 uYardO; // the resort garden (YARD): origin xz, road direction xz
    uniform vec4 uYardR; // and its extent in the resort frame: u0, u1, w0, w1
    varying vec3 vWorld;

    float smin(float a, float b, float k){ float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); }
    float shoreX(float z){ return 6900.0 + 350.0 * sin(z * 0.00031) + 180.0 * sin(z * 0.00083 + 1.3) + 90.0 * sin(z * 0.0021 + 0.4); }

    float coast(vec2 p){
      float w1 = (texture2D(uNoise, vec2(0.37, p.y * 0.000055)).r - 0.5) * 1500.0 + (texture2D(uNoise, vec2(0.71, p.y * 0.00042)).g - 0.5) * 300.0;
      float w2 = (texture2D(uNoise, vec2(p.x * 0.000055, 0.83)).r - 0.5) * 1500.0 + (texture2D(uNoise, vec2(p.x * 0.00042, 0.19)).g - 0.5) * 300.0;
      float a = 4300.0 + w1 - p.x;
      float b = 5200.0 + w2 - p.y;
      return smin(a, b, 900.0);
    }

    vec3 landAlbedo(vec2 p){
      float n1 = texture2D(uNoise, p * 0.00032).r;
      float n2 = texture2D(uNoise, p * 0.0025 + 0.5).g;
      float n3 = texture2D(uNoise, p * 0.019).b;
      vec3 veg  = vec3(0.050, 0.064, 0.046);
      vec3 dark = vec3(0.022, 0.030, 0.024);
      vec3 soil = vec3(0.105, 0.075, 0.052);
      vec3 c = mix(veg, dark, smoothstep(0.42, 0.68, n1));
      c = mix(c, soil, smoothstep(0.6, 0.8, n2) * 0.75);
      return c * (0.78 + 0.44 * n3);
    }

    float runwayPaint(vec2 rw){
      float ax = abs(rw.x);
      float paint = step(21.2, ax) * step(ax, 22.1);
      if (rw.y > 6.0 && rw.y < 36.0 && ax > 3.0 && ax < 20.0) paint = max(paint, step(fract((ax - 3.0) / 3.4), 0.55));
      if (rw.y > 150.0 && ax < 0.45) paint = max(paint, step(fract((rw.y - 150.0) / 50.0), 0.6));
      if (rw.y > 400.0 && rw.y < 445.0 && ax > 8.0 && ax < 17.0) paint = 1.0;
      for (int i = 1; i <= 6; i++) {
        float y0 = 150.0 * float(i);
        if (i != 3 && rw.y > y0 && rw.y < y0 + 22.5 && ax > 8.0 && ax < 15.0) paint = max(paint, step(fract((ax - 8.0) / 2.4), 0.55));
      }
      return paint;
    }

    vec3 shadeWater(vec3 wp, vec3 v, float dist){
      vec2 uv1 = wp.xz * 0.0042 + vec2(uTime * 0.012, uTime * 0.007);
      vec2 uv2 = wp.xz * 0.0107 + vec2(-uTime * 0.009, uTime * 0.013);
      vec2 g = (texture2D(uWaterN, uv1).xy * 2.0 - 1.0) + (texture2D(uWaterN, uv2).xy * 2.0 - 1.0) * 0.7;
      float s = 0.34 / (1.0 + dist * 0.00032);
      vec3 n = normalize(vec3(-g.x * s, 1.0, -g.y * s));
      vec3 r = reflect(v, n);
      r.y = abs(r.y) + 0.0005;
      float cosv = max(dot(-v, n), 0.0);
      float fres = 0.02 + 0.98 * pow(1.0 - cosv, 5.0);
      vec3 refl = skyColor(r);
      // fine ripples only for the glints
      vec2 g2 = texture2D(uWaterN, wp.xz * 0.043 + vec2(uTime * 0.05, -uTime * 0.03)).xy * 2.0 - 1.0;
      vec3 n2 = normalize(n + vec3(-g2.x, 0.0, -g2.y) * s * 1.6);
      vec3 r2 = reflect(v, n2);
      float md = max(dot(r, uMoonDir), 0.0);
      float md2 = max(dot(r2, uMoonDir), 0.0);
      vec3 moon = vec3(1.0, 0.9, 0.74) * (pow(md2, 2600.0) * 9.0 + pow(md, 220.0) * 0.32);
      vec3 deep = vec3(0.005, 0.010, 0.017);
      vec3 col = mix(deep, refl, fres) + moon * (0.25 + fres);
      // Freetown's lights, broken up by the swell
      float az = atan(r.x, -r.z);
      float da = az - uCityBearing;
      da = mod(da + 3.14159265, 6.2831853) - 3.14159265;
      float band = exp(-da * da / (uCitySpread * uCitySpread));
      float vert = step(0.0, r.y) * (1.0 - smoothstep(0.0, uCityElTop, r.y));
      float streak = texture2D(uNoise, vec2(az * 42.0, r.y * 1.6 + uTime * 0.02)).b;
      col += vec3(1.0, 0.56, 0.22) * band * vert * pow(streak, 4.0) * 2.2 * (0.25 + fres);
      return col;
    }

    void main(){
      vec3 wp = vWorld;
      // Freetown's hills own everything past the far shore
      if (wp.z > -22000.0 && wp.z < 5500.0 && wp.x > shoreX(wp.z) + 8.0) discard;
      // the garden has its own, finer ground; leaving the hole stops the two fighting for depth
      vec2 rel = wp.xz - uYardO.xy;
      vec2 lq = vec2(dot(rel, uYardO.zw), dot(rel, vec2(-uYardO.w, uYardO.z)));
      if (lq.x > uYardR.x + 0.2 && lq.x < uYardR.y - 0.2 && lq.y > uYardR.z + 0.2 && lq.y < uYardR.w - 0.2) discard;
      vec3 d = wp - cameraPosition;
      float dist = length(d);
      vec3 v = d / dist;
      float c = coast(wp.xz);
      vec3 col;
      if (c < 0.0) {
        col = shadeWater(wp, v, dist);
        // faint surf line
        float surf = smoothstep(-40.0, -3.0, c) * (0.5 + 0.5 * sin(c * 0.35 + uTime * 1.2));
        col += vec3(0.05, 0.06, 0.07) * surf * 0.35;
      } else {
        vec3 n = vec3(0.0, 1.0, 0.0);
        vec3 alb = landAlbedo(wp.xz);
        vec2 ruv = regionUV(wp.xz);
        vec4 a = texture2D(uAlbedo, ruv) * inRegion(ruv);
        alb = alb * (1.0 - a.a) + a.rgb;
        vec2 rw = vec2(wp.x, -wp.z);
        if (abs(rw.x) < 22.6 && rw.y > 0.0 && rw.y < 3200.0) {
          float tyre = (rw.y > 200.0 && rw.y < 1100.0 && abs(rw.x) < 9.0) ? texture2D(uNoise, vec2(rw.x * 0.25, rw.y * 0.004)).g : 0.0;
          alb *= 1.0 - smoothstep(0.5, 0.8, tyre) * 0.5;
          alb = mix(alb, vec3(0.46, 0.46, 0.44), runwayPaint(rw) * 0.9);
        }
        alb *= mix(0.55, 1.0, smoothstep(0.0, 35.0, c));
        col = alb * sceneLight(wp, n);
      }
      col = applyFog(col, wp);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- Freetown hills */
export const HILLS = {
  vertex: /* glsl */ `
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      vNormal = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,
  fragment: COMMON + /* glsl */ `
    uniform float uCityZ;
    uniform float uCityZSpread;
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main(){
      vec3 n = normalize(vNormal);
      float moonL = max(dot(n, uMoonDir), 0.0);
      float tex = texture2D(uNoise, vWorld.xz * 0.0011).r;
      vec3 col = vec3(0.010, 0.014, 0.018) * (0.7 + 0.6 * tex) + vec3(0.045, 0.05, 0.058) * moonL * 0.55;
      float dz = (vWorld.z - uCityZ) / uCityZSpread;
      float city = exp(-dz * dz);
      col += vec3(0.24, 0.10, 0.035) * city * exp(-max(vWorld.y, 0.0) / 140.0) * 0.32;
      vec3 dd = vWorld - cameraPosition;
      float dist = length(dd);
      col = mix(col, fogColor(dd / dist) * 0.8, (1.0 - exp(-dist * uFog * 0.55)));
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- buildings */
export const BUILDINGS = {
  vertex: /* glsl */ `
    attribute vec2 fc;
    attribute vec4 bdata;
    varying vec3 vWorld;
    varying vec3 vN;
    varying vec2 vFc;
    varying vec4 vB;
    void main(){
      vWorld = position;
      vN = normal;
      vFc = fc;
      vB = bdata;
      gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
    }`,
  fragment: COMMON + LIGHTING + /* glsl */ `
    varying vec3 vWorld;
    varying vec3 vN;
    varying vec2 vFc;
    varying vec4 vB;
    uniform vec4 uPorch[32]; // the resort's porch and pavilion lights: xyz, strength
    uniform vec3 uPorchCol;

    vec3 porchLight(vec3 wp, vec3 n){
      vec3 acc = vec3(0.0);
      for (int i = 0; i < 32; i++) {
        vec4 L = uPorch[i];
        if (L.w <= 0.0) continue;
        vec3 d = L.xyz - wp;
        float d2 = dot(d, d);
        vec3 l = d * inversesqrt(max(d2, 1e-4));
        float ndl = max(dot(n, l), 0.0) * 0.75 + 0.25;
        acc += L.w * ndl / (1.0 + d2 * 0.42);
      }
      return acc * uPorchCol;
    }

    // the resort: villas, pavilion, gatehouse, walls (materials 6-15, see resort.js)
    vec4 resortShade(vec3 n, float type){
      float x = vFc.x;
      float y = vFc.y;
      vec3 alb = vec3(0.5);
      vec3 emit = vec3(0.0);
      float porchK = 1.0;
      if (type < 6.5) {                       // pink plaster, with windows and the door
        alb = vec3(0.80, 0.50, 0.42) * (0.94 + 0.12 * texture2D(uNoise, vWorld.xz * 0.21 + y * 0.13).r);
        // bdata.w: 0 plain wall, 2 windows, 100 + x = front wall with the door at x
        float mode = vB.w;
        if (mode > 0.5) {
          float doorX = mode > 99.0 ? mode - 100.0 : 1.6;
          float m = 3.0;
          float cell = floor((x - doorX) / m + 0.5);
          float lx = x - doorX - cell * m;
          if (mode > 99.0 && abs(cell) < 0.5) {
            // black door in a cream surround, with a lit fanlight
            float d = step(abs(lx), 0.62) * step(y, 2.3);
            float surround = step(abs(lx), 0.8) * step(y, 2.5) * (1.0 - d);
            alb = mix(alb, vec3(0.86, 0.78, 0.6), surround);
            float panel = step(abs(abs(lx) - 0.31), 0.014) + step(abs(y - 1.15), 0.014);
            alb = mix(alb, vec3(0.03, 0.028, 0.03) * (1.0 + panel * 2.0), d);
            emit += vec3(1.0, 0.72, 0.42) * 0.9 * step(abs(lx), 0.55) * step(2.33, y) * step(y, 2.45);
          } else {
            // windows on a 3 m grid round the door: white frames, glass lit warm or dark
            float win = step(abs(lx), 0.62) * step(0.82, y) * step(y, 2.38);
            float frame = win * (1.0 - step(abs(lx), 0.52) * step(0.92, y) * step(y, 2.28));
            float mullion = win * step(abs(lx), 0.035) * (1.0 - frame);
            float h = hash12(vec2(cell, vB.x * 37.0));
            float lit = step(h, vB.y);
            vec3 glow = mix(vec3(1.0, 0.70, 0.40), vec3(1.0, 0.80, 0.55), hash12(vec2(h, 3.0))) * (0.8 + 0.3 * (y - 0.9));
            vec3 glass = mix(vec3(0.03, 0.035, 0.045), glow * 1.25, lit);
            float pane = win * (1.0 - frame) * (1.0 - mullion);
            alb = mix(alb, vec3(0.92, 0.91, 0.88), max(frame, mullion));
            emit += glass * pane;
            alb *= 1.0 - pane;
          }
        }
      } else if (type < 7.5) {                // red brick, running bond with pale mortar
        float row = floor(y / 0.078);
        float bx = x / 0.235 + mod(row, 2.0) * 0.5;
        float mort = max(step(fract(y / 0.078), 0.14), step(fract(bx), 0.06));
        float v = hash12(vec2(floor(bx), row));
        alb = mix(vec3(0.46, 0.17, 0.12) * (0.75 + 0.4 * v), vec3(0.62, 0.55, 0.48), mort);
      } else if (type < 8.5) {                // maroon standing-seam metal roof
        float seam = 1.0 - smoothstep(0.0, 0.05, abs(fract(x / 0.48) - 0.5) * 0.48);
        alb = vec3(0.34, 0.075, 0.07) * (1.0 - seam * 0.45) * (0.9 + 0.2 * texture2D(uNoise, vWorld.xz * 0.05).g);
        porchK = 0.15;
        float sheen = pow(max(dot(reflect(normalize(vWorld - cameraPosition), n), uMoonDir), 0.0), 18.0);
        emit += vec3(0.30, 0.22, 0.24) * sheen * 0.35;
      } else if (type < 9.5) {                // cream columns and trim
        alb = vec3(0.88, 0.80, 0.62);
        float flute = 0.92 + 0.08 * step(0.5, fract(x / 0.075));
        alb *= flute;
      } else if (type < 10.5) {               // porch front: pink arches and frieze, white balustrade
        float bay = vB.w;
        float bx = mod(x, bay);
        float dp = min(bx, bay - bx);
        float pier = 0.27;
        float halfOpen = bay * 0.5 - pier;
        float ax = (bx - bay * 0.5) / max(halfOpen, 0.1);
        float spring = 2.05;
        float crown = spring + min(halfOpen, 0.42);
        // a shallow arch on stepped shoulders, springing from the column capitals
        float archTop = dp < pier + 0.2 ? spring - 0.16 : spring + sqrt(max(0.0, 1.0 - ax * ax)) * (crown - spring);
        float opening = step(pier, dp) * step(y, archTop);
        float bayMid = (floor(x / bay) + 0.5) * bay;
        float doorBay = vB.y > 0.0 ? step(abs(bayMid - vB.y), bay * 0.45) : 0.0;
        alb = vec3(0.80, 0.50, 0.42) * (0.94 + 0.12 * texture2D(uNoise, vWorld.xz * 0.21 + y * 0.13).r);
        if (opening > 0.5) {
          if (y > 0.95 || doorBay > 0.5) discard;
          float topRail = step(0.83, y);
          float botRail = step(y, 0.11);
          float bp = abs(mod(bx, 0.19) - 0.095);
          float t = clamp((y - 0.11) / 0.72, 0.0, 1.0);
          float bw = 0.028 + 0.03 * sin(t * 3.14159) * (0.6 + 0.4 * sin(t * 9.42));
          float baluster = step(bp, bw);
          if (topRail + botRail + baluster < 0.5) discard;
          alb = vec3(0.93, 0.93, 0.90);
        } else {
          // the arch's edge, and the ribbed band of plaster above
          float edge = (1.0 - step(pier + 0.07, dp)) * step(pier, dp) + step(abs(y - archTop - 0.04), 0.04) * step(pier, dp);
          float ribs = step(crown + 0.08, y) * step(fract(y / 0.085), 0.3);
          alb *= 1.0 - min(edge, 1.0) * 0.12 - ribs * 0.2;
        }
      } else if (type < 11.5) {               // pavilion columns, pale blue
        alb = vec3(0.50, 0.68, 0.76);
      } else if (type < 12.5) {               // fascia boards, soffits, beams
        alb = vec3(0.17, 0.18, 0.20);
      } else if (type < 13.5) {               // grey floor tiles
        float gl = max(step(fract(x / 0.6), 0.04), step(fract(y / 0.6), 0.04));
        alb = vec3(0.42, 0.42, 0.44) * (1.0 - gl * 0.35);
      } else if (type < 14.5) {               // wrought-iron railing
        float bar = step(abs(mod(x, 0.13) - 0.065), 0.012);
        float rails = step(0.88, y) + step(y, 0.08) + step(abs(y - 0.5), 0.02);
        if (bar + rails < 0.5) discard;
        alb = vec3(0.025, 0.025, 0.03);
        porchK = 0.4;
      } else if (type < 15.5) {               // perimeter wall
        alb = vec3(0.56, 0.56, 0.54) * (0.9 + 0.15 * texture2D(uNoise, vWorld.xz * 0.11 + y * 0.2).b);
        alb *= 1.0 - step(2.25, y) * 0.3;
      } else {                                 // grey fascia boards, stepped, with the gutter on top
        alb = vec3(0.40, 0.41, 0.43) * (1.0 - step(abs(y - 0.12), 0.015) * 0.4 - step(abs(y - 0.24), 0.015) * 0.4);
        alb *= 1.0 - step(0.31, y) * 0.45;
        porchK = 0.5;
      }
      float height = max(vWorld.y, 0.0);
      vec3 light = vec3(0.11, 0.13, 0.19) * (0.45 + 0.55 * max(dot(n, uMoonDir), 0.0));
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      light += bakedLight(vWorld.xz + n.xz * 1.5) * exp(-height / 2.4) * 0.9 * (1.0 - step(0.5, n.y) * 0.7);
      light += porchLight(vWorld, n) * porchK;
      return vec4(alb * light + emit, 1.0);
    }

    void main(){
      vec3 n = normalize(vN);
      float type = vB.z;
      if (type > 5.5) {
        vec3 rc = resortShade(n, type).rgb;
        rc = applyFog(rc, vWorld);
        gl_FragColor = vec4(dither(rc), 1.0);
        return;
      }
      vec3 alb = vec3(0.16, 0.15, 0.14);
      if (type > 0.5 && type < 1.5) alb = vec3(0.22, 0.22, 0.23);      // terminal
      else if (type > 1.5 && type < 2.5) alb = vec3(0.62, 0.56, 0.48); // resort, warm plaster
      else if (type > 2.5 && type < 3.5) alb = vec3(0.30, 0.27, 0.24); // resort wall
      else if (type > 3.5 && type < 4.5) alb = vec3(0.30, 0.20, 0.13); // pavilion roof (thatch)
      else if (type > 4.5) alb = vec3(0.10, 0.10, 0.11);                // vehicle
      float roof = step(0.5, n.y);
      alb *= mix(1.0, 0.55, roof);
      float height = max(vWorld.y, 0.0);
      vec3 light = vec3(0.11, 0.13, 0.19) * (0.5 + 0.5 * max(dot(n, uMoonDir), 0.0));
      light += spot(uSpotPos[0], uSpotDir[0], uSpotCol[0], uSpotCone[0], uSpotRange[0], vWorld, n);
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      // light pooled on the ground washes the bottom of walls
      vec3 baked = bakedLight(vWorld.xz + n.xz * 6.0);
      light += baked * mix(exp(-height / 3.8) * 1.1, 0.12, roof);
      vec3 col = alb * light;
      // resort facade uplight
      if (type > 1.5 && type < 2.5) col += alb * vec3(1.0, 0.78, 0.5) * exp(-height / 2.6) * (1.0 - roof) * 0.42;
      // windows
      float winType = vB.w;
      if (roof < 0.5 && winType > 2.5) {
        // resort house: two floors of rooms, balcony rails upstairs, a plain fascia on top
        float y = vFc.y;
        float fascia = step(7.2, y);
        vec2 q = vec2(vFc.x / 4.2, y / 3.6);
        vec2 id = floor(q);
        vec2 f = fract(q);
        float ground = 1.0 - step(1.0, id.y);
        float win = step(0.2, f.x) * step(f.x, 0.8) * step(ground > 0.5 ? 0.06 : 0.16, f.y) * step(f.y, 0.82) * (1.0 - fascia);
        float h = hash12(id + vB.x * 17.0);
        float lit = step(h, vB.y);
        float curtain = step(0.55, hash12(id * 1.7 + 3.0));
        vec3 wc = mix(vec3(1.0, 0.74, 0.44), vec3(1.0, 0.62, 0.32), curtain) * mix(1.05, 0.75, curtain);
        wc *= 0.78 + 0.35 * f.y;
        vec3 glass = vec3(0.014, 0.018, 0.026);
        col = mix(col, mix(glass, wc, lit), win);
        // balcony rail + slab edge upstairs
        float rail = step(3.62, y) * step(y, 4.55) * (1.0 - fascia);
        col = mix(col, col * 0.35 + vec3(0.02), rail * 0.85);
        float slab = step(3.5, y) * step(y, 3.72);
        col = mix(col, alb * 0.25, slab);
        // fascia: a quiet dark band that carries the sign
        col = mix(col, alb * vec3(0.16, 0.14, 0.13) + alb * vec3(1.0, 0.8, 0.55) * 0.05, fascia);
      } else if (roof < 0.5 && winType > 0.5) {
        vec2 cellSize = winType > 1.5 ? vec2(3.6, 3.3) : vec2(3.0, 2.9);
        vec2 q = vFc / cellSize;
        vec2 id = floor(q);
        vec2 f = fract(q);
        float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.28, f.y) * step(f.y, 0.8);
        float h = hash12(id + vB.x * 17.0);
        float lit = step(h, vB.y);
        vec3 wc = mix(vec3(1.0, 0.72, 0.42), vec3(1.0, 0.86, 0.66), hash12(id * 3.1 + vB.x));
        if (winType > 1.5) wc = mix(vec3(0.85, 0.9, 1.0), vec3(1.0, 0.84, 0.6), step(0.5, hash12(id + 9.0)));
        vec3 glass = vec3(0.012, 0.016, 0.024);
        col = mix(col, mix(glass, wc * 1.2, lit), win);
      }
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- palms */
export const PALMS = {
  vertex: /* glsl */ `
    attribute vec3 offset;
    attribute vec4 pdata;   // height, atlas idx, flip, uplight
    attribute vec3 tint;
    varying vec2 vUv;
    varying float vIdx;
    varying vec3 vTint;
    varying float vUp;
    varying vec3 vWorld;
    void main(){
      vec3 toCam = cameraPosition - offset;
      vec3 camDir = normalize(vec3(toCam.x, 0.0, toCam.z));
      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
      float h = pdata.x;
      float w = h * 0.5;
      float flip = pdata.z > 0.0 ? 1.0 : -1.0;
      vec3 p = offset + right * (position.x * w * flip) + vec3(0.0, (position.y + 0.5) * h, 0.0);
      vUv = vec2(position.x + 0.5, position.y + 0.5);
      vIdx = pdata.y;
      vTint = tint;
      vUp = pdata.w;
      vWorld = p;
      gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
    }`,
  fragment: COMMON + /* glsl */ `
    uniform sampler2D uPalm;
    varying vec2 vUv;
    varying float vIdx;
    varying vec3 vTint;
    varying float vUp;
    varying vec3 vWorld;
    void main(){
      vec2 auv = vec2((vIdx + clamp(vUv.x, 0.002, 0.998)) / 4.0, vUv.y);
      float a = texture2D(uPalm, auv).a;
      if (a < 0.45) discard;
      vec3 col = vec3(0.003, 0.005, 0.005);
      float y = vUv.y;
      float trunk = 1.0 - smoothstep(0.62, 0.74, y);
      float crown = smoothstep(0.62, 0.74, y);
      // grazing uplight: bright at the foot, fading up the trunk; crown lit from below at its core
      float cx = abs(vUv.x - 0.5) * 2.0;
      float under = crown * (1.0 - smoothstep(0.0, 0.75, cx)) * (1.0 - smoothstep(0.7, 0.95, y));
      col += vTint * vUp * (trunk * pow(1.0 - y, 1.6) * 1.1 + under * 0.35);
      col += vec3(0.018, 0.022, 0.03) * crown * 0.6;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- lights (points) */
export const LIGHTS = {
  vertex: /* glsl */ `
    attribute vec3 color;
    attribute vec4 params; // size (m), type, phase, group
    uniform float uTime;
    uniform float uPixelScale;
    uniform vec4 uGroups;
    varying vec3 vColor;
    varying float vI;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      float dist = max(-mv.z, 1.0);
      float px = params.x * uPixelScale / dist;
      float type = params.y;
      float I = 1.0;
      if (type > 0.5 && type < 1.5) {           // sequenced approach flasher
        float f = fract(uTime * 2.0 - params.z);
        I = 0.15 + smoothstep(0.0, 0.012, f) * (1.0 - smoothstep(0.02, 0.1, f)) * 3.2;
      } else if (type > 1.5 && type < 2.5) {    // double strobe
        float f = fract(uTime * 0.85 + params.z);
        I = (step(f, 0.035) + step(0.11, f) * step(f, 0.145)) * 3.0;
      } else if (type > 2.5 && type < 3.5) {    // red beacon
        I = 0.1 + pow(max(sin(uTime * 4.6 + params.z * 6.2831), 0.0), 5.0) * 2.0;
      } else if (type > 3.5) {                  // city scintillation
        I = 0.78 + 0.22 * sin(uTime * (0.8 + params.z * 3.0) + params.z * 61.0);
      }
      float g = params.w;
      float fade = g < 0.5 ? uGroups.x : (g < 1.5 ? uGroups.y : (g < 2.5 ? uGroups.z : uGroups.w));
      I *= fade;
      float core = clamp(px, 1.3, 26.0);
      vI = I * clamp(px * 0.9, 0.32, 1.0);
      vColor = color;
      gl_PointSize = core * 4.2;
      gl_Position = projectionMatrix * mv;
      gl_Position.z -= 0.0012 * gl_Position.w * smoothstep(1500.0, 4000.0, dist);
    }`,
  fragment: /* glsl */ `
    varying vec3 vColor;
    varying float vI;
    void main(){
      float d = length(gl_PointCoord - 0.5) * 2.0;
      if (d > 1.0) discard;
      float core = smoothstep(0.26, 0.05, d);
      float halo = exp(-d * d * 9.0) * 0.55 + exp(-d * d * 2.6) * 0.12;
      float a = (core * 1.25 + halo) * vI;
      vec3 c = mix(vColor, vec3(1.0), core * 0.55);
      gl_FragColor = vec4(c * a, 1.0);
    }`,
};

/* ---------------------------------------------------------------- pool */
export const POOL = {
  vertex: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vUv = uv;
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,
  fragment: COMMON + /* glsl */ `
    uniform vec2 uSize;
    varying vec2 vUv;
    varying vec3 vWorld;
    float caustic(vec2 p, float t){
      float n1 = texture2D(uNoise, p * 0.09 + vec2(t * 0.021, t * 0.013)).r;
      float n2 = texture2D(uNoise, p * 0.11 - vec2(t * 0.017, -t * 0.019) + 0.31).g;
      float v = abs(n1 - n2);
      return pow(1.0 - smoothstep(0.0, 0.05, v), 2.0);
    }
    void main(){
      vec2 p = vUv * uSize;
      float c = caustic(p, uTime) * 0.7 + caustic(p * 1.9 + 3.0, uTime * 1.3) * 0.4;
      vec3 base = vec3(0.03, 0.42, 0.52);
      vec3 col = base * (0.8 + 0.5 * c) + vec3(0.55, 1.0, 1.0) * pow(c, 2.5) * 0.55;
      vec2 e = min(vUv, 1.0 - vUv) * uSize;
      float edge = smoothstep(0.0, 0.9, min(e.x, e.y));
      col *= mix(0.35, 1.0, edge);
      float centre = 1.0 - length(vUv - 0.5) * 0.8;
      col *= 0.75 + 0.45 * centre;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- the resort's garden, close up */
export const YARD = {
  vertex: /* glsl */ `
    attribute vec2 lp;
    varying vec2 vLp;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vLp = lp;
      vUv = uv;
      vWorld = position;
      gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
    }`,
  fragment: COMMON + LIGHTING + /* glsl */ `
    uniform sampler2D uYardMask; // r pavers, g pool deck, b planting beds
    uniform sampler2D uYardLight;
    varying vec2 vLp;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vec2 p = vLp;
      vec4 m = texture2D(uYardMask, vUv);
      float fw = max(fwidth(p.x), fwidth(p.y));
      float fine = 1.0 - smoothstep(0.03, 0.1, fw); // joints fade out before they shimmer
      // lawn
      float n1 = texture2D(uNoise, p * 0.31).r;
      float n2 = texture2D(uNoise, p * 1.7 + 0.3).g;
      vec3 alb = vec3(0.105, 0.17, 0.085) * (0.72 + 0.4 * n1) * (0.85 + 0.3 * n2);
      // planting beds: soil and low shrubs
      float sh = texture2D(uNoise, p * 0.9 + 0.7).b;
      alb = mix(alb, mix(vec3(0.07, 0.055, 0.04), vec3(0.05, 0.10, 0.045), smoothstep(0.35, 0.6, sh)), m.b);
      // pavers, laid basket-weave, 22 x 11 cm
      vec2 c = floor(p / 0.44);
      vec2 f = fract(p / 0.44);
      if (mod(c.x + c.y, 2.0) > 0.5) f = f.yx;
      float joint = max(step(fract(f.y * 2.0), 0.07), step(f.x, 0.035)) * fine;
      float tone = hash12(c * 3.1 + floor(f.y * 2.0));
      alb = mix(alb, vec3(0.60, 0.55, 0.47) * (0.88 + 0.18 * tone) * (1.0 - joint * 0.35), m.r);
      // pool deck: grey stone slabs, 120 x 60 cm
      vec2 sl = p / vec2(1.2, 0.6);
      sl.x += step(1.0, mod(floor(sl.y), 2.0)) * 0.5;
      vec2 sf = fract(sl);
      float sj = max(step(sf.x, 0.02), step(sf.y, 0.04)) * fine;
      alb = mix(alb, vec3(0.47, 0.48, 0.50) * (0.9 + 0.15 * hash12(floor(sl))) * (1.0 - sj * 0.3), m.g);
      // moonlight, the lamps' pools and the shuttle's headlights
      vec3 n = vec3(0.0, 1.0, 0.0);
      vec3 light = vec3(0.15, 0.18, 0.26) * (0.5 + 0.5 * max(uMoonDir.y, 0.0));
      light += texture2D(uYardLight, vUv).rgb * uLightGain;
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      vec3 col = applyFog(alb * light, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};

/* ---------------------------------------------------------------- sign (additive) */
export const SIGN = {
  vertex: /* glsl */ `
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragment: /* glsl */ `
    uniform sampler2D uMap;
    uniform float uGain;
    varying vec2 vUv;
    void main(){
      vec4 t = texture2D(uMap, vUv);
      gl_FragColor = vec4(t.rgb * t.a * uGain, 1.0);
    }`,
};

/* ---------------------------------------------------------------- plane / vehicle silhouettes */
export const SOLID = {
  vertex: /* glsl */ `
    varying vec3 vWorld;
    varying vec3 vN;
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,
  fragment: COMMON + LIGHTING + /* glsl */ `
    uniform vec3 uColor;
    varying vec3 vWorld;
    varying vec3 vN;
    void main(){
      vec3 n = normalize(vN);
      vec3 col = uColor * (sceneLight(vWorld, n) * 0.6 + 0.05);
      float rim = pow(1.0 - max(dot(n, normalize(cameraPosition - vWorld)), 0.0), 3.0);
      col += vec3(0.05, 0.06, 0.08) * rim;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`,
};
