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

## Photos and the dance video

The hotel's own photos, a few landscapes from its travel-package gallery and the dance clip live
in `assets/photos/` and `assets/video/`. To swap a photo, upload a new file with the same name.
A slot whose file is missing shows tie-dye art instead (the browser logs a harmless 404).

| File | Where it shows |
|---|---|
| `resort.jpg` | Welcome section, under the headline |
| `room-deluxe.jpg` | Deluxe Single Room card and booking tool |
| `room-balcony.jpg` | Deluxe Single Room · Balcony, Pool View card and booking tool |
| `room-suite.jpg` | Executive Suite (no photo yet, so it shows tie-dye art) |
| `pool.jpg` | "Swimming pool with a view" tile |
| `lobby.jpg` | Wide band at the end of "Our story" |
| `day-1.jpg` … `day-7.jpg` | Itinerary cards, Day 1 to Day 7 |
| `share.jpg` | The preview when the link is shared (1200 × 630) |
| `../video/dance.mp4`, `dance.webm`, `dance-poster.jpg` | "Drums on the courtyard" section |

Room photos are 6:5 landscape (about 1080 × 900) and day photos 4:5 portrait (880 × 1100); the
others are 1280 to 2000 px wide. All are JPEGs at about 80% quality with camera and location data
removed. The dance clip is 7.7 seconds at 720 × 1280: an H.264 MP4 that most browsers play and a
WebM copy for the rest. It plays silently while it's on screen, and the button turns the sound on.
With reduced motion or data saver on, it waits for the button. On the live site, upload photos to
`public_html/assets/photos/` in cPanel's File Manager.

## Set room rates

Rates live in the `ROOMS` list at the top of `js/booking.js`. The room cards, the "from $…"
buttons and the booking totals all read from it. Rates confirmed by the hotel in September 2026:

| Room | Per night |
|---|---|
| Deluxe Single Room | $115 |
| Deluxe Single Room · Balcony, Pool View | $125 |
| Executive Suite · Resort View | $145 |

`index.html` repeats these numbers (the `data-rate` values and the "from $…" buttons) so they
show before the script loads; change them there too.

## Make bookings arrive somewhere

Booking requests go to `book.php` on the hosting. It emails each request to the hotel and sends
the guest a copy that says plainly it's a request, not a confirmed booking. Requests go to
contactafricawakawaka@gmail.com with a copy to awwreceptionist@gmail.com (`HOTEL_EMAIL` and
`HOTEL_COPY` at the top of `book.php`); `BOOKINGS.md` has the steps.

Until the inbox is set, the tool runs in preview mode. It works end to end, sends nothing, and
says so, with the phone number, so no visitor thinks they have booked.

## Edit the film

The film's source is in `src/film/`:

- `world.js`: the layout (runway, road, Freetown's hills and lights, the resort's lamps, paths
  and palms)
- `resort.js`: the hotel's buildings, modelled on the photos: pink villas on brick plinths,
  arched porches with cream columns and white balustrades, maroon hip roofs, the Chicken Bluff
  pavilion by the pool
- `index.js`: camera path, plane and shuttle
- `shaders.js`: the look
- `textures.js`: noise, palms and the lit sign

After editing, rebuild the bundle (needs Node 18+):

```bash
./build.sh          # writes js/film.js (three.js tree-shaken + minified)
```

The page itself doesn't need a build step; only the film does.

**Pacing.** How far you scroll for each part of the film is set in two places. The `.film`
height in `css/site.css` (515vh, 480vh on phones) is the whole length. `storyTime` in
`js/main.js` shares it out: the landing takes the first 57.5% of the scroll, the drive the
next 23%, the arrival the rest. Captions (`data-in`, `data-peak`, `data-out` on each `.beat`
in `index.html`) and the HUD are timed in story time, so they move with it.

**Scroll button.** At the top of the page a large "Scroll down to land" button (on phones
"Swipe up to land") explains what to do; clicking it plays the landing. If a visitor stops
mid-film for a few seconds, it comes back as "Keep scrolling" and moves on to the next caption.

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

1. Run `./package.sh`. It writes `dist/africa-waka-waka-site.zip` (about 7.7 MB, mostly photos and the dance video) with only the
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

**Updating later:** build the zip again and extract it over the top. Extracting the zip also
replaces `.htaccess` and `book.php`, so redo any edits made to them on the server. The site sits
behind GoDaddy's website firewall, which keeps copies of the files: clear its cache after an
upload (Website Security → Firewall → Settings → Performance → Clear cache).

The zip links each style sheet and script with a fingerprint of its contents
(`css/site.css?v=9a747cd6`), so a changed file gets a new address and the firewall can't pair the
new page with an old copy. That only works through the zip: a CSS or JS file uploaded on its
own keeps the old address. Photos can be uploaded one at a time into `assets/photos/`, but one
replaced under the same name needs the firewall cache cleared before it shows.

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
