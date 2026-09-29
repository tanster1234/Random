/*
 * Africa Waka Waka — booking drawer.
 *
 * Opens from any [data-book] button (data-book="<room id>" preselects a room).
 * Flow: 1 dates + guests → 2 room → 3 details → 4 confirmation.
 *
 * ▸ BOOKING: switch real bookings on here. Both settings are optional and free.
 * ▸ ROOMS: rates live here and nowhere else; the room cards read them too.
 *   Only the Deluxe "from $85" was published; the other two rates are placeholders
 *   until the owner confirms them.
 */
(function () {
  "use strict";

  var BOOKING = {
    // Google Apps Script web-app URL (see booking-backend/SETUP.md). Each request becomes a
    // row in the hotel's Google Sheet and an email to reception.
    sheetUrl: "",
    // The hotel's WhatsApp number, country code first, digits only (e.g. "23290417670").
    // Guests get a one-tap WhatsApp message with their request.
    whatsapp: "",
    // Shown when a request cannot be sent.
    phone: "+232 90 417670",
  };
  // Neither sheetUrl nor whatsapp set = preview mode: the tool works, but nothing is sent,
  // and it says so.
  var MODE = BOOKING.sheetUrl ? "sheet" : BOOKING.whatsapp ? "whatsapp" : "preview";

  var ROOMS = [
    { id: "deluxe", name: "Deluxe Single Room", size: "18 m²", sleeps: 2, beds: "1 Queen bed", rate: 85, art: { kind: "rings", tone: "indigo", seed: 3 }, photo: "assets/photos/room-deluxe.jpg" },
    { id: "balcony", name: "Deluxe Single Room · Balcony, Pool View", size: "15 m²", sleeps: 2, beds: "1 Queen bed", rate: 95, art: { kind: "stripes", tone: "laterite", seed: 11 }, photo: "assets/photos/room-balcony.jpg" },
    { id: "suite", name: "Executive Suite · Resort View", size: "31 m²", sleeps: 5, beds: "1 King + 1 Queen", rate: 150, art: { kind: "sunburst", tone: "gold", seed: 7 }, photo: "assets/photos/room-suite.jpg" },
  ];
  var LIMITS = { adults: [1, 5], children: [0, 4], nightsMax: 60, monthsAhead: 18 };

  // The one place a request leaves the browser.
  function submitBooking(booking) {
    if (MODE !== "sheet") return Promise.resolve({ ok: true, ref: booking.ref });
    var ctrl = typeof AbortController === "function" ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () {
      ctrl.abort();
    }, 20000) : 0;
    return fetch(BOOKING.sheetUrl, {
      method: "POST",
      // text/plain keeps this a "simple" request, so Apps Script needs no CORS preflight
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(booking),
      signal: ctrl ? ctrl.signal : undefined,
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (res) {
        clearTimeout(timer);
        if (!res || !res.ok) throw new Error((res && res.error) || "not saved");
        return res;
      });
  }

  /* ---------------------------------------------------------------- helpers */
  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  var DAY = 86400000;
  function startOfDay(d) {
    var x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }
  function addDays(d, n) {
    var x = new Date(d);
    x.setDate(x.getDate() + n);
    return startOfDay(x);
  }
  function nightsBetween(a, b) {
    return Math.round((startOfDay(b) - startOfDay(a)) / DAY);
  }
  function iso(d) {
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function fromIso(s) {
    if (!s) return null;
    var p = s.split("-");
    if (p.length !== 3) return null;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return isNaN(d) ? null : startOfDay(d);
  }
  function fmt(d, long) {
    return d.toLocaleDateString("en-GB", long ? { weekday: "long", day: "numeric", month: "long", year: "numeric" } : { weekday: "short", day: "numeric", month: "short" });
  }
  function money(n) {
    return "$" + n.toLocaleString("en-US");
  }
  function room(id) {
    for (var i = 0; i < ROOMS.length; i++) if (ROOMS[i].id === id) return ROOMS[i];
    return null;
  }
  function plural(n, one, many) {
    return n + " " + (n === 1 ? one : many);
  }

  /* ---------------------------------------------------------------- state */
  var today = startOfDay(new Date());
  var S = { step: 1, checkin: null, checkout: null, adults: 2, children: 0, room: null, view: new Date(today.getFullYear(), today.getMonth(), 1), busy: false, lastFocus: null };

  var root;
  var panel;
  var els = {};

  function init() {
    root = $("#booking");
    if (!root) return;
    panel = $(".booking-panel", root);
    els.title = $("[data-bk-title]", root);
    els.steps = $$("[data-step]", root).filter(function (n) {
      return n.classList.contains("bk-step");
    });
    els.dots = $$("[data-step-dot]", root);
    els.range = $("[data-cal-range]", root);
    els.grid = $("[data-cal-grid]", root);
    els.hint = $("[data-cal-hint]", root);
    els.prev = $("[data-cal-prev]", root);
    els.next = $("[data-cal-next]", root);
    els.rooms = $("[data-bk-rooms]", root);
    els.form = $("[data-bk-form]", root);
    els.note = $("[data-contact-note]", root);
    els.summary = $("[data-bk-summary]", root);
    els.foot = $("[data-bk-foot]", root);
    els.back = $("[data-bk-back]", root);
    els.go = $("[data-bk-next]", root);
    els.doneTitle = $("[data-done-title]", root);
    els.doneText = $("[data-done-text]", root);
    els.doneSummary = $("[data-done-summary]", root);

    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) close();
    });
    root.addEventListener("keydown", onKey);
    els.prev.addEventListener("click", function () {
      S.view = new Date(S.view.getFullYear(), S.view.getMonth() - 1, 1);
      renderCal();
    });
    els.next.addEventListener("click", function () {
      S.view = new Date(S.view.getFullYear(), S.view.getMonth() + 1, 1);
      renderCal();
    });
    els.grid.addEventListener("click", function (e) {
      var b = e.target.closest("[data-date]");
      if (b && !b.disabled) pickDate(fromIso(b.getAttribute("data-date")));
    });
    els.grid.addEventListener("keydown", onGridKey);
    $$("[data-guest]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-guest");
        var lim = LIMITS[k];
        S[k] = Math.max(lim[0], Math.min(lim[1], S[k] + +b.getAttribute("data-step")));
        if (S.room && !fits(room(S.room))) S.room = null;
        renderGuests();
        renderFoot();
      });
    });
    els.rooms.addEventListener("change", function (e) {
      if (e.target.name === "bk-room") {
        S.room = e.target.value;
        renderFoot();
      }
    });
    els.back.addEventListener("click", function () {
      go(S.step - 1);
    });
    els.go.addEventListener("click", advance);
    els.form.addEventListener("submit", function (e) {
      e.preventDefault();
      advance();
    });
    els.form.addEventListener("input", function (e) {
      var f = e.target.closest(".field");
      if (f) f.classList.remove("is-invalid");
      if (e.target.name === "phone" || e.target.name === "email") els.note.classList.remove("is-error");
    });

    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-book]");
      if (!t || root.contains(t)) return;
      e.preventDefault();
      var id = t.getAttribute("data-book");
      open({ room: id || null, trigger: t });
    });

    applyMode();

    // keep the published rates in sync with this config
    ROOMS.forEach(function (r) {
      $$('[data-rate="' + r.id + '"]').forEach(function (n) {
        n.textContent = money(r.rate);
      });
    });
    var min = Math.min.apply(null, ROOMS.map(function (r) {
      return r.rate;
    }));
    $$(".btn .price").forEach(function (n) {
      n.innerHTML = "<small>from</small>" + money(min);
    });
  }

  /* ---------------------------------------------------------------- open / close */
  function open(opts) {
    opts = opts || {};
    S.lastFocus = opts.trigger || document.activeElement;
    if (opts.checkin) {
      var ci = fromIso(opts.checkin);
      if (ci && ci >= today) {
        S.checkin = ci;
        S.checkout = addDays(ci, Math.max(1, Math.min(LIMITS.nightsMax, opts.nights || 1)));
        S.view = new Date(ci.getFullYear(), ci.getMonth(), 1);
      }
    }
    if (opts.adults) S.adults = Math.max(LIMITS.adults[0], Math.min(LIMITS.adults[1], opts.adults));
    if (opts.room && room(opts.room)) S.room = opts.room;
    if (S.step === 4) reset();
    root.hidden = false;
    document.documentElement.classList.add("booking-lock");
    if (window.__lenis) window.__lenis.stop();
    renderAll();
    go(S.checkin && S.checkout ? 2 : 1, true);
    requestAnimationFrame(function () {
      root.classList.add("is-open");
      panel.focus({ preventScroll: true });
    });
  }

  function close() {
    if (root.hidden) return;
    root.classList.remove("is-open");
    document.documentElement.classList.remove("booking-lock");
    if (window.__lenis) window.__lenis.start();
    setTimeout(function () {
      root.hidden = true;
      if (S.step === 4) reset();
    }, 450);
    if (S.lastFocus && S.lastFocus.focus) S.lastFocus.focus({ preventScroll: true });
  }

  function reset() {
    S.step = 1;
    S.checkin = null;
    S.checkout = null;
    S.room = null;
    S.adults = 2;
    S.children = 0;
    els.form.reset();
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== "Tab") return;
    var f = $$('button:not([disabled]), [href], input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])', panel).filter(function (n) {
      return n.offsetParent !== null && !n.closest("[hidden]");
    });
    if (!f.length) return;
    var first = f[0];
    var last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ---------------------------------------------------------------- steps */
  var TITLES = { 1: "When do you land?", 2: "Choose your room", 3: "Who’s staying?", 4: "Request received" };

  function go(n, silent) {
    n = Math.max(1, Math.min(4, n));
    if (n >= 2 && !(S.checkin && S.checkout)) n = 1;
    if (n >= 3 && !S.room) n = 2;
    S.step = n;
    els.steps.forEach(function (s) {
      s.hidden = +s.getAttribute("data-step") !== n;
    });
    els.dots.forEach(function (d) {
      var k = +d.getAttribute("data-step-dot");
      d.classList.toggle("is-active", k === n);
      d.classList.toggle("is-done", k < n);
      if (k === n) d.setAttribute("aria-current", "step");
      else d.removeAttribute("aria-current");
    });
    els.title.textContent = TITLES[n];
    els.back.hidden = n === 1 || n === 4;
    els.foot.hidden = n === 4;
    if (n === 2) renderRooms();
    renderFoot();
    var body = $(".bk-body", root);
    if (body) body.scrollTop = 0;
    if (!silent) {
      var target = n === 3 ? $('input[name="name"]', els.form) : n === 4 ? $(".bk-done .btn:not([hidden])", root) : els.title;
      if (target === els.title) els.title.setAttribute("tabindex", "-1");
      if (target) target.focus({ preventScroll: true });
    }
  }

  function advance() {
    if (S.busy) return;
    if (S.step === 1 && S.checkin && S.checkout) return go(2);
    if (S.step === 2 && S.room) return go(3);
    if (S.step === 3) return send();
  }

  function fits(r) {
    return r && S.adults + S.children <= r.sleeps;
  }

  /* ---------------------------------------------------------------- calendar */
  function pickDate(d) {
    if (!d) return;
    if (!S.checkin || S.checkout || d <= S.checkin) {
      S.checkin = d;
      S.checkout = null;
    } else {
      var n = nightsBetween(S.checkin, d);
      S.checkout = n > LIMITS.nightsMax ? addDays(S.checkin, LIMITS.nightsMax) : d;
    }
    renderCal();
    renderFoot();
    var focusDate = S.checkout || S.checkin;
    var btn = els.grid.querySelector('[data-date="' + iso(focusDate) + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  function onGridKey(e) {
    var b = e.target.closest("[data-date]");
    if (!b) return;
    var d = fromIso(b.getAttribute("data-date"));
    var delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    if (!delta) return;
    e.preventDefault();
    var t = addDays(d, delta);
    if (t < today) return;
    var nb0 = els.grid.querySelector('[data-date="' + iso(t) + '"]');
    if (!nb0) {
      S.view = new Date(t.getFullYear(), t.getMonth() - (t > d ? 1 : 0), 1);
      if (S.view < new Date(today.getFullYear(), today.getMonth(), 1)) S.view = new Date(today.getFullYear(), today.getMonth(), 1);
      renderCal();
    }
    var nb = els.grid.querySelector('[data-date="' + iso(t) + '"]');
    if (nb) nb.focus();
  }

  // Two months at a time; weeks that are entirely in the past are skipped.
  function renderMonth(y, m, ctx) {
    var first = new Date(y, m, 1);
    var days = new Date(y, m + 1, 0).getDate();
    var offset = (first.getDay() + 6) % 7; // Monday first
    var html = '<p class="cal-mlabel">' + first.toLocaleDateString("en-GB", { month: "long", year: "numeric" }) + "</p>";
    html += '<div class="cal-grid" role="grid" aria-label="' + first.toLocaleDateString("en-GB", { month: "long", year: "numeric" }) + '">';
    var cells = [];
    var i;
    for (i = 0; i < offset; i++) cells.push(null);
    for (i = 1; i <= days; i++) cells.push(new Date(y, m, i));
    while (cells.length % 7) cells.push(null);
    for (var row = 0; row < cells.length; row += 7) {
      var week = cells.slice(row, row + 7);
      var live = week.some(function (d) {
        return d && d >= today;
      });
      if (!live) continue;
      week.forEach(function (d) {
        if (!d) {
          html += '<span class="cal-empty" aria-hidden="true"></span>';
          return;
        }
        var cls = ["cal-day"];
        var past = d < today;
        if (+d === +today) cls.push("is-today");
        if (S.checkin && +d === +S.checkin) cls.push("is-start");
        if (S.checkout && +d === +S.checkout) cls.push("is-end");
        if (S.checkin && S.checkout && d > S.checkin && d < S.checkout) cls.push("in-range");
        var label = fmt(d, true) + (S.checkin && +d === +S.checkin ? ", arrival" : "") + (S.checkout && +d === +S.checkout ? ", departure" : "");
        var tab = -1;
        if (!past && !ctx.tab && (ctx.focus ? +d === +ctx.focus : true)) {
          tab = 0;
          ctx.tab = true;
        }
        html +=
          '<button type="button" class="' + cls.join(" ") + '" data-date="' + iso(d) + '"' + (past ? " disabled" : "") +
          ' tabindex="' + tab + '" aria-label="' + label + '"' +
          (S.checkin && (+d === +S.checkin || (S.checkout && +d === +S.checkout)) ? ' aria-pressed="true"' : "") +
          "><span>" + d.getDate() + "</span></button>";
      });
    }
    return html + "</div>";
  }

  function renderCal() {
    var y = S.view.getFullYear();
    var m = S.view.getMonth();
    var next = new Date(y, m + 1, 1);
    var maxView = new Date(today.getFullYear(), today.getMonth() + LIMITS.monthsAhead - 1, 1);
    els.prev.disabled = y === today.getFullYear() && m === today.getMonth();
    els.next.disabled = S.view >= maxView;
    var a = S.view.toLocaleDateString("en-GB", { month: "short" });
    var b = next.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
    els.range.textContent = a + " – " + b;
    var focus = S.checkout || S.checkin;
    var ctx = { tab: false, focus: focus && focus >= S.view && focus < new Date(y, m + 2, 1) ? focus : null };
    els.grid.innerHTML = renderMonth(y, m, ctx) + renderMonth(next.getFullYear(), next.getMonth(), ctx);
    if (!ctx.tab) {
      var firstBtn = els.grid.querySelector("button:not([disabled])");
      if (firstBtn) firstBtn.tabIndex = 0;
    }
    if (!S.checkin) els.hint.textContent = "Tap your arrival date, then the day you leave.";
    else if (!S.checkout) els.hint.textContent = "Arriving " + fmt(S.checkin) + ". Now tap the day you leave.";
    else {
      var n = nightsBetween(S.checkin, S.checkout);
      els.hint.textContent = fmt(S.checkin) + " → " + fmt(S.checkout) + " · " + plural(n, "night", "nights") + ". Tap a date to change.";
    }
  }

  function renderGuests() {
    ["adults", "children"].forEach(function (k) {
      var out = $('[data-guest-out="' + k + '"]', root);
      if (out) out.textContent = S[k];
      $$('[data-guest="' + k + '"]', root).forEach(function (b) {
        var st = +b.getAttribute("data-step");
        b.disabled = st < 0 ? S[k] <= LIMITS[k][0] : S[k] >= LIMITS[k][1];
      });
    });
  }

  /* ---------------------------------------------------------------- rooms */
  function renderRooms() {
    var n = S.checkin && S.checkout ? nightsBetween(S.checkin, S.checkout) : 1;
    var guests = S.adults + S.children;
    if (S.room && !fits(room(S.room))) S.room = null;
    els.rooms.innerHTML = ROOMS.map(function (r) {
      var ok = guests <= r.sleeps;
      return (
        '<label class="bk-room' + (ok ? "" : " is-off") + '">' +
        '<input type="radio" name="bk-room" value="' + r.id + '"' + (S.room === r.id ? " checked" : "") + (ok ? "" : " disabled") + ">" +
        '<span class="bk-room-art" data-art="' + r.id + '"></span>' +
        "<span><h3>" + r.name + "</h3>" +
        '<p class="meta">' + r.size + " · " + r.beds + " · sleeps " + r.sleeps + "</p>" +
        (ok ? "" : '<p class="warn">Sleeps up to ' + r.sleeps + ", you have " + guests + " guests</p>") +
        "</span>" +
        '<span class="price"><b>' + money(r.rate * n) + "</b><small>" + money(r.rate) + " × " + plural(n, "night", "nights") + "</small></span>" +
        '<span class="tick" aria-hidden="true"><svg><use href="#i-check"/></svg></span>' +
        "</label>"
      );
    }).join("");
    ROOMS.forEach(function (r) {
      var slot = els.rooms.querySelector('[data-art="' + r.id + '"]');
      if (!slot) return;
      var img = new Image();
      img.alt = "";
      img.onload = function () {
        slot.appendChild(img);
      };
      img.src = r.photo;
      if (window.Gara) {
        var c = document.createElement("canvas");
        c.width = 120;
        c.height = 120;
        slot.insertBefore(c, slot.firstChild);
        window.Gara.paint(c, r.art);
      }
    });
  }

  /* ---------------------------------------------------------------- summary */
  function renderFoot() {
    var html;
    var total = null;
    var guests = plural(S.adults + S.children, "guest", "guests");
    var narrow = window.matchMedia("(max-width: 600px)").matches;
    var f = function (d) {
      return narrow ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : fmt(d);
    };
    if (S.checkin && S.checkout) {
      var n = nightsBetween(S.checkin, S.checkout);
      html = '<b class="sum-dates">' + f(S.checkin) + " → " + f(S.checkout) + '</b><span class="sum-meta">' + plural(n, "night", "nights") + " · " + guests + "</span>";
      var r = room(S.room);
      if (r && S.step >= 2) total = r.rate * n;
    } else if (S.checkin) {
      html = '<b class="sum-dates">Arriving ' + f(S.checkin) + '</b><span class="sum-meta">Pick the day you leave</span>';
    } else {
      html = '<b class="sum-dates">No dates yet</b><span class="sum-meta">' + guests + "</span>";
    }
    els.summary.innerHTML = html + (total !== null ? '<span class="total">' + money(total) + ' <small class="muted">est.<span class="hide-sm"> total</span></small></span>' : "");
    var label = "";
    var enabled = false;
    if (S.step === 1) {
      label = "Choose a room";
      enabled = !!(S.checkin && S.checkout);
    } else if (S.step === 2) {
      label = "Your details";
      enabled = !!S.room;
    } else if (S.step === 3) {
      label = S.busy ? "Sending…" : MODE === "whatsapp" ? "Send on WhatsApp" : "Request booking";
      enabled = !S.busy;
    }
    els.go.innerHTML = label + '<svg class="arrow" aria-hidden="true"><use href="#i-arrow"/></svg>';
    els.go.disabled = !enabled;
  }

  function renderAll() {
    renderCal();
    renderGuests();
    renderFoot();
  }

  /* ---------------------------------------------------------------- send */
  function send() {
    var form = els.form;
    // named lookups (form.name would be the form's own name attribute)
    var f = {};
    ["name", "phone", "email", "arrival", "flight", "pickup", "notes", "website"].forEach(function (k) {
      f[k] = form.elements.namedItem(k);
    });
    var name = f.name.value.trim();
    var phone = f.phone.value.trim();
    var email = f.email.value.trim();
    var ok = true;
    if (!name) {
      f.name.closest(".field").classList.add("is-invalid");
      ok = false;
    }
    var emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      f.email.closest(".field").classList.add("is-invalid");
      ok = false;
    }
    if (!phone && !email) {
      els.note.classList.add("is-error");
      f.phone.closest(".field").classList.add("is-invalid");
      ok = false;
    }
    if (!ok) {
      var bad = form.querySelector(".is-invalid input");
      if (bad) bad.focus();
      return;
    }
    var r = room(S.room);
    var n = nightsBetween(S.checkin, S.checkout);
    var ref = "AWW-" + Date.now().toString(36).slice(-4).toUpperCase() + Math.floor(Math.random() * 1296).toString(36).toUpperCase().padStart(2, "0");
    var booking = {
      ref: ref,
      checkin: iso(S.checkin),
      checkout: iso(S.checkout),
      nights: n,
      adults: S.adults,
      children: S.children,
      room: { id: r.id, name: r.name, rate: r.rate },
      estimatedTotal: r.rate * n,
      guest: { name: name, phone: phone, email: email },
      flight: { arrival: f.arrival.value, number: f.flight.value.trim() },
      airportPickup: f.pickup.checked,
      notes: f.notes.value.trim(),
      website: f.website ? f.website.value : "",
      page: location.href.split("#")[0],
      createdAt: new Date().toISOString(),
    };
    if (MODE === "whatsapp") {
      // opened inside the click, so pop-up blockers allow it
      var win = window.open(whatsappUrl(booking), "_blank");
      if (win) {
        try {
          win.opener = null;
        } catch (e) {}
      }
      showDone(booking, win ? "whatsapp" : "whatsapp-blocked");
      return;
    }
    S.busy = true;
    renderFoot();
    submitBooking(booking)
      .then(function () {
        S.busy = false;
        showDone(booking, MODE);
      })
      .catch(function () {
        S.busy = false;
        renderFoot();
        els.note.textContent = "We couldn’t send that. Please try again, or call " + BOOKING.phone + ".";
        els.note.classList.add("is-error");
      });
  }

  function whatsappText(b) {
    var lines = [
      "Hello Africa Waka Waka, I’d like to book a room.",
      "",
      "*Reference:* " + b.ref,
      "*Room:* " + b.room.name,
      "*Arrival:* " + fmt(fromIso(b.checkin), true),
      "*Departure:* " + fmt(fromIso(b.checkout), true) + " (" + plural(b.nights, "night", "nights") + ")",
      "*Guests:* " + plural(b.adults, "adult", "adults") + (b.children ? ", " + plural(b.children, "child", "children") : ""),
      "*Estimate:* " + money(b.estimatedTotal),
      "*Airport pickup:* " + (b.airportPickup ? "Yes" + (b.flight.number ? ", flight " + b.flight.number : "") + (b.flight.arrival ? ", landing " + b.flight.arrival : "") : "No"),
      "*Name:* " + b.guest.name,
    ];
    if (b.guest.phone) lines.push("*Phone:* " + b.guest.phone);
    if (b.guest.email) lines.push("*Email:* " + b.guest.email);
    if (b.notes) lines.push("*Notes:* " + b.notes);
    return lines.join("\n");
  }

  function whatsappUrl(b) {
    return "https://wa.me/" + BOOKING.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(whatsappText(b));
  }

  function showDone(b, mode) {
    var first = b.guest.name.split(/\s+/)[0];
    var contact = b.guest.phone || b.guest.email;
    if (mode === "preview") {
      els.doneTitle.textContent = "Thank you, " + first + ".";
      els.doneText.textContent = "This booking tool is still a preview, so your request was not sent to the hotel. To book now, call " + BOOKING.phone + " and quote " + b.ref + ".";
    } else if (mode === "whatsapp" || mode === "whatsapp-blocked") {
      els.doneTitle.textContent = "Almost done, " + first + ".";
      els.doneText.textContent =
        (mode === "whatsapp" ? "Your request is waiting in WhatsApp: press send there. " : "Tap the button below to send your request on WhatsApp. ") +
        "Reception will confirm in that chat" + (b.airportPickup ? ", and the shuttle will be waiting at arrivals." : ".");
    } else {
      els.doneTitle.textContent = "Thank you, " + first + ".";
      els.doneText.textContent =
        "Your request for the " + b.room.name + " is in. Our 24/7 reception will contact you on " + contact + " to confirm" +
        (b.airportPickup ? ", and the shuttle will be waiting at arrivals." : ".");
    }
    var wa = $("[data-wa-link]", root);
    if (wa) {
      var showWa = !!BOOKING.whatsapp;
      wa.hidden = !showWa;
      if (showWa) {
        wa.href = whatsappUrl(b);
        wa.querySelector("span").textContent = mode === "whatsapp" ? "Open WhatsApp again" : mode === "sheet" ? "Also message us on WhatsApp" : "Send on WhatsApp";
      }
    }
    var rows = [
      ["Reference", b.ref, "ref"],
      ["Arrival", fmt(fromIso(b.checkin), true)],
      ["Departure", fmt(fromIso(b.checkout), true)],
      ["Guests", plural(b.adults, "adult", "adults") + (b.children ? ", " + plural(b.children, "child", "children") : "")],
      ["Room", b.room.name],
      ["Estimated total", money(b.estimatedTotal) + " for " + plural(b.nights, "night", "nights")],
      ["Airport pickup", b.airportPickup ? "Yes, free" + (b.flight.arrival ? " · " + b.flight.arrival : "") + (b.flight.number ? " · " + b.flight.number : "") : "No"],
    ];
    els.doneSummary.innerHTML = rows
      .map(function (r) {
        return '<div class="' + (r[2] || "") + '"><dt>' + r[0] + "</dt><dd>" + escapeHtml(r[1]) + "</dd></div>";
      })
      .join("");
    go(4);
    els.title.textContent = mode === "preview" ? "Preview only" : mode === "sheet" ? "Request received" : "One last tap";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function applyMode() {
    var n = $("[data-bk-preview]", root);
    if (n) n.hidden = MODE !== "preview";
    var paid = $("[data-done-note]", root);
    if (paid && MODE === "preview") paid.hidden = true;
  }

  window.AWWBooking = { open: open, close: close, ROOMS: ROOMS, submitBooking: submitBooking, mode: MODE };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
