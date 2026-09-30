# Switching on real bookings (email only)

Booking requests are emailed to the hotel through [Web3Forms](https://web3forms.com), a free
form-to-email service. There is no server, no password and nothing to install: just one key.

## Setup (about 5 minutes)

1. Go to https://web3forms.com, enter the email address that should receive booking requests,
   and create an access key. The key is sent to that inbox. If it is the hotel's inbox, ask
   them to forward it.
2. Open `js/booking.js` and paste the key into `emailKey` at the top:
   `emailKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",`
3. Upload the updated `js/booking.js` to `public_html/js/` in cPanel's File Manager, replacing
   the old file.
4. Make a test booking on the live site and check the inbox, including spam. Mark the first
   one "not spam" so the next ones land in the inbox.

Until a key is set, the tool runs in **preview mode**: it works end to end, sends nothing, and
tells the guest to call +232 90 417670 instead.

## What reception receives

One email per request, with the subject `Booking request AWW-XXXXXX: <room>, <arrival> to <departure>`.
It lists the reference, room, dates, nights, guests, estimated total, airport pickup and flight,
and the guest's name, phone, email and notes. Pressing **Reply** answers the guest directly when
they gave an email; otherwise call them on the number provided.

Requests are not instant confirmations. Reception checks availability, including rooms sold on
Booking.com and Expedia, then confirms by email or phone. To take a deposit, put a payment link or
mobile-money details in that reply. Nothing on the website has to change.

## Good to know

- Web3Forms' free plan is meant for small sites; check its current monthly limit on their pricing
  page. A new key can be made at any time, and changing the key is the only update needed.
- A hidden form field quietly drops submissions from simple spam bots.
- If requests grow to several a day, or double bookings with Booking.com start happening, move
  to a booking engine with a channel manager (for example Beds24 or Cloudbeds).
