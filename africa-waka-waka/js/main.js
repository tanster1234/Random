/* Africa Waka Waka — page orchestration: smooth scroll, the film, chrome, reveals. */
(function () {
  "use strict";

  var q = new URLSearchParams(location.search);
  var JUMP = q.get("jump");
  var DEBUG = q.has("debug");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || q.has("still");
  var mobile = window.matchMedia("(max-width: 720px)").matches;
  if (JUMP !== null) {
    history.scrollRestoration = "manual";
    document.documentElement.classList.add("no-reveal");
  }

  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  if (gsap && ST) gsap.registerPlugin(ST);

  var clamp = function (x, a, b) {
    return Math.max(a, Math.min(b, x));
  };
  var smooth = function (a, b, x) {
    var t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };
  var $ = function (s, r) {
    return (r || document).querySelector(s);
  };
  var $$ = function (s, r) {
    return Array.prototype.slice.call((r || document).querySelectorAll(s));
  };

  /* ------------------------------------------------------------ smooth scroll */
  var lenis = null;
  if (!reduce && JUMP === null && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
    window.__lenis = lenis;
    if (gsap && ST) {
      lenis.on("scroll", ST.update);
      gsap.ticker.add(function (t) {
        lenis.raf(t * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (t) {
        lenis.raf(t);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }

  function headerOffset() {
    var h = $(".site-header");
    return h ? h.offsetHeight : 0;
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    var offset = id === "#top" ? 0 : -headerOffset() + 1;
    if (lenis) lenis.scrollTo(target, { offset: offset, duration: 1.4 });
    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + offset, behavior: reduce ? "auto" : "smooth" });
    if (id !== "#top") history.replaceState(null, "", id);
  });

  /* ------------------------------------------------------------ the film */
  var filmEl = $(".film");
  var stage = $(".film-stage");
  var canvas = $(".film-canvas");
  var film = null;
  var still = reduce;
  var cur = 0;
  var beats = $$(".beat", filmEl).map(function (el) {
    return { el: el, a: +el.dataset.in, p: +el.dataset.peak, b: +el.dataset.out, last: -1 };
  });
  var hud = {
    line: $("[data-hud-line]"),
    num: $("[data-hud-num]"),
    name: $("[data-hud-name]"),
    bar: $("[data-hud-bar]"),
    cue: $(".scroll-cue"),
    fade: $(".film-fade"),
  };
  var CH = [
    { at: 0, name: "Approach" },
    { at: 0.405, name: "Wheels down" },
    { at: 0.52, name: "Airport-Ferry Road" },
    { at: 0.9, name: "Arrived" },
  ];
  var ALT = [
    [0, 2220],
    [0.2, 1160],
    [0.3, 500],
    [0.36, 245],
    [0.405, 12],
    [0.415, 0],
  ];

  function webgl() {
    try {
      var c = document.createElement("canvas");
      return !!c.getContext("webgl2");
    } catch (e) {
      return false;
    }
  }
  if (!webgl() || !window.WakaFilm) still = true;
  if (still) filmEl.classList.add("is-still");

  function filmTarget() {
    var r = filmEl.getBoundingClientRect();
    var span = r.height - window.innerHeight;
    return span > 0 ? clamp(-r.top / span, 0, 1) : 0;
  }

  function altitude(p) {
    for (var i = 0; i < ALT.length - 1; i++) {
      if (p <= ALT[i + 1][0]) {
        var t = (p - ALT[i][0]) / (ALT[i + 1][0] - ALT[i][0]);
        return ALT[i][1] + (ALT[i + 1][1] - ALT[i][1]) * t;
      }
    }
    return 0;
  }
  var lastLine = "";
  var lastCh = -1;
  function updateOverlay(p) {
    for (var i = 0; i < beats.length; i++) {
      var b = beats[i];
      var a = 0;
      if (p >= b.a && p <= b.b) {
        if (p < b.p) a = (p - b.a) / Math.max(1e-4, b.p - b.a);
        else if (b.b > 1.5) a = 1;
        else {
          var hold = b.p + (b.b - b.p) * 0.45;
          a = p < hold ? 1 : 1 - (p - hold) / Math.max(1e-4, b.b - hold);
        }
      }
      a = smooth(0, 1, a);
      if (Math.abs(a - b.last) < 0.002) continue;
      b.last = a;
      b.el.style.opacity = a.toFixed(3);
      var dir = p < b.p ? 1 : -1;
      b.el.style.transform = "translate3d(0," + ((1 - a) * 26 * dir).toFixed(1) + "px,0)";
      b.el.classList.toggle("is-on", a > 0.5);
      b.el.style.visibility = a <= 0.001 ? "hidden" : "visible";
    }
    // HUD
    var ch = 0;
    for (var k = 0; k < CH.length; k++) if (p >= CH[k].at) ch = k;
    if (ch !== lastCh) {
      lastCh = ch;
      hud.num.textContent = "0" + (ch + 1);
      hud.name.textContent = CH[ch].name;
    }
    var line;
    if (p < 0.405) line = "Alt " + Math.round(altitude(p)).toLocaleString("en-US") + " ft · final approach · rwy 12";
    else if (p < 0.52) line = "Wheels down · 22:41 GMT · welcome to Salone";
    else if (p < 0.94) {
      var left = Math.max(0, Math.round(480 * (1 - (p - 0.52) / (0.95 - 0.52))));
      var mm = Math.floor(left / 60);
      var ss = left % 60;
      line = "Shuttle · 0" + mm + ":" + (ss < 10 ? "0" : "") + ss + " to Africa Waka Waka";
    } else line = "Arrived · room ready · AC on";
    if (line !== lastLine) {
      lastLine = line;
      hud.line.textContent = line;
    }
    hud.bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
    hud.cue.style.opacity = (1 - smooth(0.004, 0.03, p)).toFixed(3);
    hud.fade.style.opacity = smooth(0.935, 1, p).toFixed(3);
  }

  function sizeFilm() {
    if (!film) return;
    var r = stage.getBoundingClientRect();
    film.setSize(r.width, r.height);
  }

  function createFilm() {
    if (still || film) return;
    try {
      film = window.WakaFilm.createFilm({ canvas: canvas, mobile: mobile, fontFamily: '"Fraunces", Georgia, serif' });
    } catch (e) {
      console.warn("Film unavailable, showing the still.", e);
      still = true;
      filmEl.classList.add("is-still");
      return;
    }
    sizeFilm();
    cur = filmTarget();
    film.place(cur, performance.now() / 1000);
    film.render();
    filmEl.classList.add("is-live");
    canvas.addEventListener("webglcontextlost", function (e) {
      e.preventDefault();
      still = true;
      filmEl.classList.remove("is-live");
    });
  }

  // adaptive resolution: judge by frame time, step the pixel ratio down (or back up)
  var frames = 0;
  var slow = 0;
  var fast = 0;
  function adapt(dt) {
    if (!film || dt > 250) return;
    frames++;
    if (dt > 26) slow++;
    else if (dt < 14) fast++;
    if (frames >= 45) {
      if (slow > 22 && film.pixelRatio > 0.6) film.setPixelRatio(film.pixelRatio - 0.15);
      else if (fast > 43 && film.pixelRatio < film.maxPixelRatio) film.setPixelRatio(film.pixelRatio + 0.1);
      frames = slow = fast = 0;
    }
  }

  var lastT = 0;
  var odd = false;
  var jank = [];
  function tick() {
    var now = performance.now();
    var dt = lastT ? now - lastT : 16;
    lastT = now;
    if (DEBUG) jank.push(dt);
    var r = filmEl.getBoundingClientRect();
    var visible = r.bottom > 0 && r.top < window.innerHeight;
    if (!visible) return;
    var target = still ? 0 : filmTarget();
    var d = target - cur;
    var settled = Math.abs(d) < 0.00008;
    cur = settled ? target : cur + d * 0.12;
    if (!still) updateOverlay(cur);
    if (film && !document.documentElement.classList.contains("booking-lock")) {
      odd = !odd;
      if (!settled || odd) {
        film.place(cur, now / 1000);
        film.render();
        adapt(settled ? dt / 2 : dt);
      }
    }
  }
  if (gsap) gsap.ticker.add(tick);
  else {
    var loop = function () {
      tick();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
  if (DEBUG) {
    setInterval(function () {
      if (!jank.length) return;
      var s = jank.slice().sort(function (a, b) {
        return a - b;
      });
      console.log("[jank] max", s[s.length - 1].toFixed(1), "p95", s[Math.floor(s.length * 0.95)].toFixed(1), "dpr", film && film.pixelRatio.toFixed(2));
      jank = [];
    }, 2000);
  }

  /* ------------------------------------------------------------ header theme */
  var header = $(".site-header");
  function setHeader() {
    var y = headerOffset() / 2;
    var theme = "dark";
    var sections = $$("[data-header]");
    for (var i = 0; i < sections.length; i++) {
      var r = sections[i].getBoundingClientRect();
      if (r.top <= y && r.bottom > y) {
        theme = sections[i].getAttribute("data-header");
        break;
      }
    }
    if (header.getAttribute("data-theme") !== theme) header.setAttribute("data-theme", theme);
    var pastFilm = filmEl.getBoundingClientRect().bottom < headerOffset();
    header.classList.toggle("is-solid", pastFilm);
  }
  window.addEventListener("scroll", setHeader, { passive: true });
  if (lenis) lenis.on("scroll", setHeader);

  /* ------------------------------------------------------------ mobile menu */
  var menuBtn = $(".menu-toggle");
  var menu = $("#mobile-menu");
  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (lenis) lenis.start();
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.hidden;
      menu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
      if (lenis) open ? lenis.stop() : lenis.start();
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("[data-book]")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ------------------------------------------------------------ itinerary (pinned first — creation order is refresh order) */
  var itin = $(".itinerary");
  var track = itin && $(".itinerary-track", itin);
  if (itin && track && gsap && ST && !reduce && window.innerWidth > 900) {
    var dist = function () {
      return Math.max(0, track.scrollWidth - window.innerWidth);
    };
    gsap.to(track, {
      x: function () {
        return -dist();
      },
      ease: "none",
      scrollTrigger: {
        trigger: itin,
        start: "center center",
        end: function () {
          return "+=" + dist();
        },
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
  } else if (itin) {
    itin.classList.add("is-scroller");
  }

  /* ------------------------------------------------------------ reveals */
  function reveal(el) {
    el.classList.add("in");
  }
  var revealEls = $$(".reveal, .reveal-card, .bento");
  $$(".room-list .reveal-card").forEach(function (el, i) {
    el.style.transitionDelay = i * 0.09 + "s";
  });
  $$(".bento .tile").forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i, 8) * 0.06 + "s";
  });
  if (JUMP !== null || reduce || !("IntersectionObserver" in window)) revealEls.forEach(reveal);
  else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  // counters
  $$("[data-count]").forEach(function (el) {
    var to = +el.getAttribute("data-count");
    if (reduce || JUMP !== null || !("IntersectionObserver" in window)) return;
    el.textContent = "0";
    var o = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      o.disconnect();
      var t0 = performance.now();
      var step = function (t) {
        var k = clamp((t - t0) / 1100, 0, 1);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    o.observe(el);
  });

  // marquee leans into fast scrolling
  var marquee = $(".marquee");
  if (marquee && lenis && !reduce) {
    var skew = 0;
    var skewT = 0;
    lenis.on("scroll", function (e) {
      skewT = clamp((e.velocity || 0) * 0.35, -7, 7);
    });
    gsap &&
      gsap.ticker.add(function () {
        skew += (skewT - skew) * 0.1;
        skewT *= 0.92;
        if (Math.abs(skew) > 0.01) marquee.style.transform = "skewX(" + (-skew).toFixed(2) + "deg)";
      });
  }

  /* ------------------------------------------------------------ dance clip */
  // Plays muted while it is on screen, like a moving photo, and the button brings in the
  // drums. With reduced motion or data saver on, nothing plays until the button is pressed.
  // Without this script the video keeps its native controls.
  function initDance() {
    var fig = $("[data-dance]");
    if (!fig) return;
    var clip = fig.querySelector("video");
    var btn = fig.querySelector("[data-dance-sound]");
    var text = btn.querySelector("span");
    var saveData = !!(navigator.connection && navigator.connection.saveData);
    var started = !reduce && !saveData && "IntersectionObserver" in window;
    clip.removeAttribute("controls");
    btn.hidden = false;
    var render = function () {
      var state = clip.paused && !started ? "play" : clip.muted ? "muted" : "sound";
      btn.setAttribute("data-state", state);
      text.textContent = state === "play" ? "Play with sound" : state === "muted" ? "Sound on" : "Sound off";
    };
    var play = function () {
      var p = clip.play();
      if (p && p.catch) p.catch(function () {});
    };
    btn.addEventListener("click", function () {
      if (clip.paused) {
        started = true;
        clip.muted = false;
        play();
      } else {
        clip.muted = !clip.muted;
      }
      render();
    });
    ["play", "pause", "volumechange"].forEach(function (ev) {
      clip.addEventListener(ev, render);
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        function (es) {
          if (es[0].isIntersecting && started) play();
          else if (!es[0].isIntersecting) clip.pause();
        },
        { threshold: 0.35 }
      ).observe(fig);
    }
    render();
  }
  initDance();

  /* ------------------------------------------------------------ quick book */
  var qb = $("[data-quick-book]");
  if (qb) {
    var date = qb.querySelector('input[type="date"]');
    var t = new Date();
    var isoDay = function (d) {
      return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    };
    date.min = isoDay(t);
    var max = new Date(t.getFullYear(), t.getMonth() + 18, t.getDate());
    date.max = isoDay(max);
    var tomorrow = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
    date.value = isoDay(tomorrow);
    var outs = { nights: qb.querySelector('output[name="nights"]'), guests: qb.querySelector('output[name="guests"]') };
    var lim = { nights: [1, 60], guests: [1, 9] };
    qb.addEventListener("click", function (e) {
      var b = e.target.closest("[data-step]");
      if (!b) return;
      var out = b.parentNode.querySelector("output");
      var key = out.getAttribute("name");
      var v = clamp(+out.textContent + +b.getAttribute("data-step"), lim[key][0], lim[key][1]);
      out.textContent = v;
    });
    qb.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!window.AWWBooking) return;
      var guests = +outs.guests.textContent;
      window.AWWBooking.open({
        checkin: date.value,
        nights: +outs.nights.textContent,
        adults: Math.min(guests, 5),
        trigger: qb.querySelector(".qb-submit"),
      });
    });
  }

  /* ------------------------------------------------------------ misc */
  $$("[data-year]").forEach(function (n) {
    n.textContent = new Date().getFullYear();
  });
  if (window.Gara) window.Gara.init();

  var resizeT;
  window.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () {
      sizeFilm();
      if (ST) ST.refresh();
    }, 150);
  });

  /* ------------------------------------------------------------ boot + dev contract */
  function boot() {
    createFilm();
    setHeader();
    if (JUMP !== null) {
      window.scrollTo(0, +JUMP || 0);
      if (ST) {
        ST.refresh();
        ST.update();
        ST.getAll().forEach(function (s) {
          if (s.animation) s.animation.progress(s.progress);
        });
      }
      cur = filmTarget();
      if (!still) updateOverlay(cur);
      if (film) {
        film.place(cur, performance.now() / 1000);
        film.render();
      }
      setHeader();
    } else if (!still) {
      updateOverlay(cur);
    }
    requestAnimationFrame(function () {
      window.__ready = true;
    });
  }
  var fontsReady = document.fonts && document.fonts.load ? Promise.all([document.fonts.load('600 64px "Fraunces"'), document.fonts.load('600 16px "Manrope"')]) : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) {
    setTimeout(r, 1800);
  })]).then(boot, boot);
})();
