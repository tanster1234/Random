# BRIEF — Africa Waka Waka website (survives context compaction; keep current)

## Constraints (from the user)
- Hotel/resort site for a friend's business: Africa Waka Waka, Lungi, Sierra Leone.
- NO Higgsfield / no generated video or images. Pure code: three.js, GSAP, Lenis, web animation.
- Every piece of information from africawakawaka.com must appear → `CONTENT.md` is the checklist.
- Booking tool: frontend only, dead simple, same visual language.
- Work on branch `claude/optimistic-keller-y7ratz`, commit + push. Do not open a PR.
- No network access to the live site, CDNs, or image hosts. Everything vendored locally.

## Concept: "Wheels Down" (Lane A, pure code)
A night arrival shot in one continuous camera move (three.js), then the content.
Vector: *the camera only ever moves forward and down.* No reversals.
Chapters (scroll progress p):
1. 0.00 Approach: high over the estuary at night. Freetown's lights on the hills across the
   water (right), moon on the water, Lungi's runway lights far ahead. Hero: the hotel's logo (originally a type wordmark, replaced by the owner's logo in October 2026).
2. ~0.30 Wheels down: approach strobes run toward the runway, the plane ahead lands, landing
   lights wash the runway.
3. ~0.55 Airport-Ferry Road: shuttle headlights leave the terminal; streetlights, palms,
   lit homes; HUD counts the 8 minutes down.
4. ~0.78 Arrival: Africa Waka Waka glowing: warm electric light, uplit palms, lit pool, sign.
5. 1.00 Handoff into the night-coloured content (seam colour = film's final bottom colour).
Sparring (fresh sub-agent) shaped this: avoid generic cloud opener, avoid daylight
"flight-sim" landscapes, electric light not lanterns (power-cut connotation), don't claim a
waterfront resort, booking reachable from frame one, film must sell proximity + shuttle +
24/7 + power.

## Beats (claims, never captions of the picture)
- Hero: "Africa Waka Waka" / "A home-style resort eight minutes from Freetown International Airport." CTA Book + Call 24/7
- "Land late. We'll be waiting." (free shuttle, private check-in, 24/7 front desk)
- "Eight minutes to your room." (no night crossing needed; Airport-Ferry Road)
- "The lights stay on." (24-hour electricity, AC, Jaguar showers, memory foam, Serta)
- "Welcome home." (Chicken Bluff, swim under the stars, breakfast on us) + CTA
Copy gate: no camera words (descent, pull back, as you scroll, one continuous…), no placeholder text.

## Art direction
- Palette: night #0b1420 · indigo #1f2f5c · laterite #b4502b · gold #edb25b · cotton #f6f0e6 · sand #ece2d2 · ink #1b1612
- Type: Fraunces (SOFT 100, pinned; opsz+wght variable) display; Manrope text/UI. Files in assets/fonts.
- Motif: Sierra Leone gara (tie-dye) patterns generated in canvas — room/day card art where photos are missing.
- Photos: `assets/photos/<name>.jpg` slots; if a file is missing the gara art shows. Never fake photos.
- Header: white over film, flips to ink over light sections.

## Page after the film
Welcome (night) → Rooms (cotton) → Resort amenities (sand) → Chicken Bluff (laterite) →
Journeys: 7-night itinerary horizontal run + mission trip + packages (indigo) → Story/vision (cotton) →
Book (night) → Policies: refund + check-in/out + trip payments (sand) → Contact/footer (night).

## Booking tool
Drawer/sheet. Step 1 "When do you land?" (arrival date, nights, guests) → Step 2 room → Step 3
details (name, phone/email, flight time, free pickup ✓) → confirmation with reference.
Rates live in one config block in js/booking.js (confirmed by the hotel: $115, $125, $145).
`submitBooking()` is the single hook for a backend.

## Engineering
- vendor/: gsap, ScrollTrigger, lenis (UMD). three.js bundled + tree-shaken with esbuild into js/film.js
  from src/film/*.js (build: see README). Works from file:// (no modules at runtime).
- Dev contract: `?jump=<y>` lands pre-scrolled + settled; `window.__ready = true` when ready.
- Reduced motion: film replaced by a single still frame; no smooth scroll; no reveal motion.
- No WebGL: CSS/SVG poster fallback.
- Verify with Playwright + /opt/pw-browsers chromium (swiftshader) at 1440×900 and 390×844.
- Never run a server in the foreground.
