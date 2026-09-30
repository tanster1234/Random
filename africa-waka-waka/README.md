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

The booking tool needs PHP to send anything, so with the servers above it runs in preview mode.
`php -S localhost:8080` serves the site with `book.php` working.

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
Until a file exists, the browser logs a harmless 404 for it. On the live site, upload them to
`public_html/assets/photos/` in cPanel's File Manager.

## Set room rates

Rates live in one place: the `ROOMS` list at the top of `js/booking.js`. The room cards, the
"from $…" buttons and the booking totals all read from it.
**Only the Deluxe rate ($85 "from", as listed publicly) is confirmed. $95 and $150 for the
other two rooms are placeholders: set the real prices before going live.**

## Make bookings arrive somewhere

Booking requests go to `book.php` on the hosting. It emails each request to the hotel and sends
the guest a copy that says plainly it's a request, not a confirmed booking. Put the hotel's inbox
in `HOTEL_EMAIL` at the top of `book.php` and upload it; `BOOKINGS.md` has the steps.

Until the inbox is set, the tool runs in preview mode. It works end to end, sends nothing, and
says so, with the phone number, so no visitor thinks they have booked.

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
js/booking.js       booking tool (rates and submitBooking live here)
book.php            emails each booking request to the hotel, with a copy to the guest
js/gara.js          tie-dye generator for photo slots
js/film.js          built film bundle (do not edit by hand; see src/film)
assets/             fonts, favicon, film poster, photos
vendor/             GSAP, ScrollTrigger, Lenis (+ licence notices)
.htaccess           Apache settings for cPanel hosting (redirects, headers, caching)
package.sh          zips the public files for uploading to cPanel
vercel.json         the same settings for Vercel
CONTENT.md          everything carried over from the old site, with sources
BOOKINGS.md         how to switch on real booking emails
BRIEF.md            design brief and decisions
```

## Deploy (GoDaddy cPanel hosting)

The site is plain files, so any cPanel "Web Hosting" plan runs it. Managed WordPress and Website
Builder plans don't: they can't host your own files.

**First upload**

1. Run `./package.sh`. It writes `dist/africa-waka-waka-site.zip` (about 460 KB) with only the
   public files and the `.htaccess`.
2. GoDaddy → My Products → Web Hosting → Manage → cPanel Admin → File Manager → `public_html`.
3. If `public_html` already has files (an old site or a placeholder page), download a copy, then
   delete them. Leave `cgi-bin` and `.well-known` alone.
4. Upload the zip, right-click it → Extract into `/public_html`, then delete the zip.
   `index.html` must sit directly in `public_html`, not in a subfolder.
5. Open the domain. If it still shows the old site, point the domain at the hosting in
   GoDaddy's DNS settings: the `A` record for `@` gets the hosting's IP address (cPanel lists it
   as "Shared IP Address"), and `www` is a `CNAME` to `@`. Leave the `MX` and other email
   records as they are.
6. HTTPS: cPanel → SSL/TLS Status → Run AutoSSL. It's free and renews itself, so GoDaddy's
   paid SSL isn't needed. Once https:// shows a padlock, open `.htaccess` in File Manager
   (Settings → Show Hidden Files) and remove the `#` from the five lines it points out.

**Updating later:** upload only the changed files over the old ones (for example photos into
`assets/photos/`), or build the zip again and extract it over the top. Extracting the zip also
replaces `.htaccess` and `book.php`, so redo any edits made to them on the server. The site sits
behind GoDaddy's website firewall, which caches pages: clear its cache after an upload.
Browsers themselves check for newer copies on every visit.

`.htaccess` forwards the old WordPress addresses (`/contactus/`, `/trip/...`, `/refund-policy/`,
`/chicken-bluff-gallery/`) to the matching sections, sets security headers, file types,
compression and font caching, and blocks `src/` and the notes if the whole folder is ever
uploaded. It was tested on Apache 2.4.

## Other hosts

Any static host works; point it at this folder with no build step. Without PHP, `book.php`
can't run, so the booking tool stays in preview mode.

- **Vercel:** `vercel.json` holds the same settings, and `.vercelignore` keeps `src/` and the
  notes off the site. Import the repository with Root Directory `africa-waka-waka` and
  Framework Preset "Other". Vercel's free Hobby plan is for non-commercial use only, so a hotel
  site needs the Pro plan.
- **Cloudflare Pages:** free, and business use is allowed. The old-address redirects would need
  a `_redirects` file, which isn't included yet.

## Accessibility and fallbacks

- `prefers-reduced-motion`: no film scrubbing, no smooth scroll, no reveal motion. A still
  frame of the arrival is shown instead.
- No WebGL: the same still frame.
- The booking drawer traps focus, closes on Esc, and the calendar supports arrow keys.
