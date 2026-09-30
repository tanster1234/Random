# Switching on real bookings

Booking requests go to `book.php`, a small script on the website's GoDaddy hosting. For each
request it sends two emails through the hosting's own mail, with no outside service or key:

- **To the hotel:** every detail of the request. Pressing **Reply** answers the guest.
- **To the guest:** a copy headed "We’ve received your booking request", which says plainly
  that it is not a booking confirmation and the room is not reserved yet, and that reception
  will reply to confirm. Replying to it reaches the hotel.

The website says the same thing before and after sending: a request is not a booking until the
hotel replies to confirm.

## Setup (about 10 minutes)

1. In `book.php`, put the hotel's inbox in `HOTEL_EMAIL`:
   `const HOTEL_EMAIL = 'reservations@africawakawaka.com';`
   It can also be changed on the server: cPanel → File Manager → `public_html` → right-click
   `book.php` → Edit.
2. Upload `book.php`, `index.html`, `js/booking.js` and `css/booking.css` to the same places in
   `public_html`, replacing the old files.
3. Clear the cache in GoDaddy's website firewall, so visitors get the new files.
4. Make a test booking with your own email address. The hotel's inbox and yours should each
   get an email within a few minutes. Check Junk or Spam too, and mark them "Not junk".
5. If an email lands in spam or doesn't arrive, open cPanel → Email Deliverability. If it shows
   problems for africawakawaka.com, click Manage and add the records it suggests at GoDaddy
   (Domain → DNS). DKIM is a new TXT record. For SPF, edit the existing record rather than
   adding a second one, and keep `include:secureserver.net` in it, because the hotel's
   Microsoft 365 email relies on it.

Until `HOTEL_EMAIL` is set, the tool runs in **preview mode**: it works end to end, sends nothing,
and tells visitors to call +232 90 417670 instead.

## Good to know

- Requests are never instant confirmations. Reception checks availability, including rooms sold
  elsewhere, then confirms by replying to the email or suggests other dates. To take a deposit,
  put a payment link or mobile-money details in that reply.
- The wording of both emails lives in `book.php` (`hotel_text`, `guest_text` and their HTML
  versions).
- Every request is also saved to `booking-requests.csv` in the hosting's home folder, one level
  above `public_html`, so it isn't public. Download it from cPanel's File Manager if an email ever
  goes missing. Set `LOG_FILE` to `''` in `book.php` to turn this off.
- Spam protection: a hidden field that only bots fill in, a limit of 3 requests per visitor in 10
  minutes and 10 a day, and requests sent from other websites are refused. The guest's copy only
  repeats checked details (dates, room, guests), so the form can't be used to send messages to
  other people.
- GoDaddy's hosting sends up to 500 emails an hour, and each request uses two.
- If requests grow to several a day, or double bookings with Booking.com start happening, move
  to a booking engine with a channel manager (for example Beds24 or Cloudbeds).
