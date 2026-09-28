# Africa Waka Waka · website

A new site for Africa Waka Waka, the home-style resort on Airport-Ferry Road in Lungi,
Sierra Leone. It opens with a scroll-driven night arrival, built in three.js: Freetown's
lights across the water, your plane landing at Lungi, the shuttle along Airport-Ferry Road,
and the resort lit up at the end. The page then covers the rooms, the resort, Chicken Bluff,
the guided journeys, the story, the policies and contact. A booking tool opens from
any "Book" button.

Everything from the current africawakawaka.com is carried over; `CONTENT.md` lists each item
and where it came from. No video and no generated images: the film is code, and the textile
art is procedurally generated Sierra Leonean gara (tie-dye).

## Preview it

It's a static site. Serve the folder with any web server (fonts won't load over `file://`):

```bash
cd africa-waka-waka
python3 -m http.server 8080      # or: npx serve .
# open http://localhost:8080
```

Handy URL flags: `?still` shows the page without the film (the reduced-motion version),
`?debug` logs frame timing to the console, and `?jump=1200` opens the page scrolled to 1200px.

## Add real photos (recommended)

Drop JPGs into `assets/photos/` with these names. Each one replaces the tie-dye art in its
slot automatically; no code changes are needed.

| File | Where it shows |
|---|---|
| `room-deluxe.jpg` | Deluxe Single Room card and booking tool |
| `room-balcony.jpg` | Deluxe Single Room · Balcony, Pool View |
| `room-suite.jpg` | Executive Suite · Resort View |
| `pool.jpg` | "Swimming pool with a view" tile |

Landscape photos around 1600px wide, saved at about 80% JPEG quality, work well.
Until a file exists, the browser logs a harmless 404 for it.

## Set room rates

Rates live in one place: the `ROOMS` list at the top of `js/booking.js`. The room cards, the
"from $…" buttons and the booking totals all read from it.
**Only the Deluxe rate ($85 "from", as listed publicly) is confirmed. $95 and $150 for the
other two rooms are placeholders: set the real prices before going live.**

## Make bookings arrive somewhere

For now the booking tool is frontend only. It collects dates, guests, room, name, phone or
email, flight time and pickup, then shows the guest a reference number. Nothing is sent
yet. To go live, edit `submitBooking()` in `js/booking.js`; it receives one object with
everything:

```js
{ ref, checkin, checkout, nights, adults, children, room: { id, name, rate },
  estimatedTotal, guest: { name, phone, email }, flight: { arrival, number },
  airportPickup, notes, createdAt }
```

Common choices: a form service (Formspree, Basin, Getform), EmailJS, a Google Sheet via
Apps Script, or the hotel's own booking system or API. Return a Promise; if it rejects,
the guest sees an error with the phone number.

## Edit the film

The film's source is in `src/film/`:

- `world.js`: the layout (runway, road, resort, Freetown's hills and lights)
- `index.js`: camera path, plane and shuttle
- `shaders.js`: the look
- `textures.js`: noise, palms and the lit sign

After editing, rebuild the bundle (needs Node 18+):

```bash
./build.sh          # writes js/film.js (three.js tree-shaken + minified)
```

The page itself doesn't need a build step; only the film does.

## What's where

```
index.html          all content and markup
css/base.css        tokens (colours, type), buttons, layout
css/site.css        sections, film overlays, HUD
css/booking.css     booking drawer
js/main.js          smooth scroll, film sync, header, reveals, pinned itinerary
js/booking.js       booking tool (rates + submitBooking live here)
js/gara.js          tie-dye generator for photo slots
js/film.js          built film bundle (do not edit by hand; see src/film)
assets/             fonts, favicon, film poster, photos
vendor/             GSAP, ScrollTrigger, Lenis (+ licence notices)
CONTENT.md          everything carried over from the old site, with sources
BRIEF.md            design brief and decisions
```

## Deploy

Upload the folder as-is to any static host: Netlify (drag and drop), Vercel, Cloudflare
Pages, GitHub Pages, or the current host's file manager. `src/`, `build.sh`,
`BRIEF.md` and `CONTENT.md` aren't needed at runtime, but they're harmless to upload.

## Accessibility and fallbacks

- `prefers-reduced-motion`: no film scrubbing, no smooth scroll, no reveal motion. A still
  frame of the arrival is shown instead.
- No WebGL: the same still frame.
- The booking drawer traps focus, closes on Esc, and the calendar supports arrow keys.
