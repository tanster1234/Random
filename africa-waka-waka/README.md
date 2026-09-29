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

The booking tool emails each request to reception through Web3Forms, a free form-to-email service.
Paste a free access key into `emailKey` at the top of `js/booking.js` and push; setup takes about
5 minutes and is described step by step in `BOOKINGS.md`.

Until a key is set, the tool runs in preview mode. It works end to end, sends nothing, and says
so, with the phone number, so no visitor thinks they have booked.

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
js/booking.js       booking tool (rates, email key and submitBooking live here)
js/gara.js          tie-dye generator for photo slots
js/film.js          built film bundle (do not edit by hand; see src/film)
assets/             fonts, favicon, film poster, photos
vendor/             GSAP, ScrollTrigger, Lenis (+ licence notices)
CONTENT.md          everything carried over from the old site, with sources
BOOKINGS.md         how to switch on real booking emails
BRIEF.md            design brief and decisions
```

## Deploy (Vercel)

`vercel.json` is included. It gives clean URLs, forwards the old WordPress addresses
(`/contactus/`, `/trip/...`, `/refund-policy/`, `/chicken-bluff-gallery/`) to the matching
sections, and sets security headers. `.vercelignore` keeps `src/`, the notes and the booking
backend off the public site.

**From the Vercel dashboard** (auto-deploys on every push):

1. vercel.com → Add New → Project → import the `Random` repository.
2. Root Directory: `africa-waka-waka`. Framework Preset: Other. Leave the build and output settings empty.
3. The site lives on the branch `claude/optimistic-keller-y7ratz`. Either merge it into
   `master`, or set that branch as the Production Branch in the project's settings and redeploy.
4. Share the production address, `https://<project>.vercel.app`. Preview deployments are
   behind Vercel login by default.

**From a terminal** (Node installed):

```bash
git clone -b claude/optimistic-keller-y7ratz https://github.com/tanster1234/Random.git
cd Random/africa-waka-waka
npx vercel@latest --prod
```

**Custom domain:** Project → Settings → Domains → add `africawakawaka.com`, then follow the DNS
steps at the registrar. Keep any existing email (MX) records as they are.

## Accessibility and fallbacks

- `prefers-reduced-motion`: no film scrubbing, no smooth scroll, no reveal motion. A still
  frame of the arrival is shown instead.
- No WebGL: the same still frame.
- The booking drawer traps focus, closes on Esc, and the calendar supports arrow keys.
