/*
 * Gara — procedural Sierra Leonean tie-dye, painted into <canvas>.
 * Used as the art behind every photo slot: if assets/photos/<name>.jpg exists the photo
 * covers it; if not, the cloth is what visitors see.
 */
(function () {
  "use strict";

  var TONES = {
    indigo: { cloth: [244, 238, 227], dye: [28, 44, 92], deep: [16, 24, 56] },
    "indigo-dark": { cloth: [70, 90, 150], dye: [20, 30, 66], deep: [11, 17, 40] },
    laterite: { cloth: [246, 235, 220], dye: [176, 78, 42], deep: [112, 44, 20] },
    gold: { cloth: [30, 44, 90], dye: [236, 176, 88], deep: [250, 214, 150] },
  };

  function rng(seed) {
    var s = seed >>> 0 || 1;
    return function () {
      s = (s + 0x6d2b79f5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function noise2(seed) {
    var R = rng(seed);
    var p = new Uint8Array(512);
    var i;
    for (i = 0; i < 256; i++) p[i] = i;
    for (i = 255; i > 0; i--) {
      var j = Math.floor(R() * (i + 1));
      var t = p[i];
      p[i] = p[j];
      p[j] = t;
    }
    for (i = 0; i < 256; i++) p[i + 256] = p[i];
    var v = new Float32Array(256);
    for (i = 0; i < 256; i++) v[i] = R();
    function vn(x, y) {
      var xi = Math.floor(x);
      var yi = Math.floor(y);
      var fx = x - xi;
      var fy = y - yi;
      var sx = fx * fx * (3 - 2 * fx);
      var sy = fy * fy * (3 - 2 * fy);
      xi &= 255;
      yi &= 255;
      var a = v[p[p[xi] + yi]];
      var b = v[p[p[xi + 1] + yi]];
      var c = v[p[p[xi] + yi + 1]];
      var d = v[p[p[xi + 1] + yi + 1]];
      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    }
    return function (x, y) {
      return vn(x, y) * 0.55 + vn(x * 2.1 + 17.3, y * 2.1 + 5.1) * 0.28 + vn(x * 4.3 + 3.7, y * 4.3 + 11.9) * 0.17;
    };
  }

  function smooth(a, b, x) {
    var t = (x - a) / (b - a);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return t * t * (3 - 2 * t);
  }

  var TAU = Math.PI * 2;

  // Each pattern returns the dye amount (0 = resisted cloth, 1 = full dye) at (u, v),
  // where u, v are in units of the shorter side.
  function makePattern(kind, R, n, aspect) {
    var i;
    if (kind === "rings") {
      var centers = [];
      var k = 1 + Math.floor(R() * 2.2);
      for (i = 0; i < k; i++) centers.push([R() * aspect, R(), 7 + R() * 4]);
      return function (u, v) {
        var best = 9;
        var freq = 8;
        for (var c = 0; c < centers.length; c++) {
          var dx = u - centers[c][0];
          var dy = v - centers[c][1];
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < best) {
            best = d;
            freq = centers[c][2];
          }
        }
        var w = n(u * 3.2, v * 3.2) - 0.5;
        var band = 0.5 + 0.5 * Math.cos((best + w * 0.07) * TAU * freq);
        var fold = 0.5 + 0.5 * Math.cos(Math.atan2(v - centers[0][1], u - centers[0][0]) * 14 + w * 4);
        var resist = smooth(0.58, 0.86, band + (n(u * 11, v * 11) - 0.5) * 0.35) * (0.75 + 0.25 * fold);
        var core = 1 - smooth(0.02, 0.07, best + w * 0.02);
        return Math.max(0, 1 - Math.max(resist, core));
      };
    }
    if (kind === "stripes") {
      var ang = (R() - 0.5) * 0.9 + (R() < 0.5 ? 0 : Math.PI / 2);
      var ca = Math.cos(ang);
      var sa = Math.sin(ang);
      var kk = 6 + R() * 5;
      return function (u, v) {
        var a = u * ca + v * sa;
        var b = -u * sa + v * ca;
        var w = n(u * 2.6, v * 2.6) - 0.5;
        var band = 0.5 + 0.5 * Math.cos((a + Math.sin(b * 5.5) * 0.035 + w * 0.08) * TAU * kk);
        var fine = 0.5 + 0.5 * Math.cos((a + w * 0.05) * TAU * kk * 3);
        var resist = smooth(0.66, 0.92, band + (n(u * 13, v * 13) - 0.5) * 0.3);
        resist = Math.max(resist, smooth(0.9, 0.99, fine) * 0.45);
        return 1 - resist;
      };
    }
    if (kind === "sunburst") {
      var cx = aspect * (0.3 + R() * 0.4);
      var cy = 0.3 + R() * 0.4;
      var rays = 18 + Math.floor(R() * 10);
      return function (u, v) {
        var dx = u - cx;
        var dy = v - cy;
        var r = Math.sqrt(dx * dx + dy * dy);
        var th = Math.atan2(dy, dx);
        var w = n(u * 3, v * 3) - 0.5;
        var ray = 0.5 + 0.5 * Math.cos(th * rays + r * 9 + w * 2.2);
        var ring = 0.5 + 0.5 * Math.cos((r + w * 0.05) * TAU * 4.5);
        var resist = smooth(0.7, 0.95, ray) * smooth(0.02, 0.25, r) * (1 - smooth(0.6, 1.1, r));
        resist = Math.max(resist, smooth(0.86, 0.98, ring) * 0.55);
        resist = Math.max(resist, 1 - smooth(0.02, 0.09, r + w * 0.03));
        return 1 - resist;
      };
    }
    if (kind === "spots") {
      var cell = 0.16 + R() * 0.08;
      return function (u, v) {
        var gx = Math.floor(u / cell);
        var gy = Math.floor(v / cell);
        var best = 9;
        for (var oy = -1; oy <= 1; oy++) {
          for (var ox = -1; ox <= 1; ox++) {
            var hx = gx + ox;
            var hy = gy + oy;
            var h = Math.abs(Math.sin(hx * 127.1 + hy * 311.7) * 43758.5453) % 1;
            var h2 = Math.abs(Math.sin(hx * 269.5 + hy * 183.3) * 43758.5453) % 1;
            var px = (hx + 0.2 + h * 0.6) * cell;
            var py = (hy + 0.2 + h2 * 0.6) * cell;
            var d = Math.hypot(u - px, v - py) / cell;
            if (d < best) best = d;
          }
        }
        var w = n(u * 9, v * 9) - 0.5;
        var dot = 1 - smooth(0.16, 0.26, best + w * 0.12);
        var tie = smooth(0.3, 0.34, best + w * 0.05) * (1 - smooth(0.36, 0.42, best + w * 0.05));
        return 1 - Math.max(dot, tie * 0.7);
      };
    }
    // waves
    var kw = 5 + R() * 4;
    var ph = R() * TAU;
    return function (u, v) {
      var w = n(u * 2.4, v * 2.4) - 0.5;
      var y = v + Math.sin(u * TAU * 1.1 + ph + v * 2) * 0.05 + w * 0.06;
      var band = 0.5 + 0.5 * Math.cos(y * TAU * kw);
      var resist = smooth(0.7, 0.93, band + (n(u * 12, v * 12) - 0.5) * 0.3);
      return 1 - resist;
    };
  }

  function paint(canvas, opts) {
    var kind = opts.kind || "rings";
    var tone = TONES[opts.tone] || TONES.indigo;
    var seed = +opts.seed || 1;
    var W = canvas.width;
    var H = canvas.height;
    var ctx = canvas.getContext("2d");
    if (!ctx || !W || !H) return;
    var R = rng(seed * 7919);
    var n = noise2(seed * 31 + 7);
    var n2 = noise2(seed * 57 + 3);
    var s = Math.min(W, H);
    var aspect = W / s;
    var pattern = makePattern(kind, R, n, aspect);
    var img = ctx.createImageData(W, H);
    var d = img.data;
    var cl = tone.cloth;
    var dy = tone.dye;
    var dp = tone.deep;
    for (var y = 0; y < H; y++) {
      var v = y / s;
      for (var x = 0; x < W; x++) {
        var u = x / s;
        var amt = pattern(u, v);
        // uneven uptake, darker where dye pooled, a hint of weave
        var mott = n2(u * 6, v * 6);
        amt = amt * (0.84 + 0.3 * mott) + (n2(u * 26, v * 26) - 0.5) * 0.08;
        amt = amt < 0 ? 0 : amt > 1 ? 1 : amt;
        var pool = smooth(0.78, 1, amt) * smooth(0.45, 0.8, mott);
        var weave = ((x & 1) ^ (y & 1)) ? 0.012 : -0.012;
        var k = (y * W + x) * 4;
        for (var c = 0; c < 3; c++) {
          var col = cl[c] + (dy[c] - cl[c]) * amt;
          col += (dp[c] - col) * pool * 0.55;
          col *= 1 + weave;
          d[k + c] = col;
        }
        d[k + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  function hasPhoto(el) {
    var img = el.querySelector(":scope > img");
    return img && img.complete && img.naturalWidth > 0;
  }

  function mount(el) {
    if (el.__gara) return;
    el.__gara = true;
    if (hasPhoto(el)) return;
    var rect = el.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
    var maxW = rect.width > 900 ? 960 : 620;
    var w = Math.max(40, Math.min(maxW, Math.round(rect.width * ratio)));
    var h = Math.max(30, Math.round((w * rect.height) / Math.max(rect.width, 1)));
    var canvas = document.createElement("canvas");
    canvas.className = "gara-canvas";
    canvas.width = w;
    canvas.height = h;
    canvas.setAttribute("aria-hidden", "true");
    el.insertBefore(canvas, el.firstChild);
    var run = function () {
      if (hasPhoto(el)) {
        canvas.remove();
        return;
      }
      paint(canvas, { kind: el.dataset.gara, tone: el.dataset.tone, seed: el.dataset.seed });
      requestAnimationFrame(function () {
        canvas.classList.add("is-ready");
      });
    };
    if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 600 });
    else setTimeout(run, 30);
  }

  function init() {
    var els = document.querySelectorAll("[data-gara]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(mount);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            io.unobserve(e.target);
            mount(e.target);
          }
        });
      },
      { rootMargin: "700px 2400px 700px 2400px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  window.Gara = { paint: paint, mount: mount, init: init };
})();
