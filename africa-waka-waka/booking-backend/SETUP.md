# Switching on real bookings (no server, no monthly cost)

The booking tool on the site has three modes, set by two values at the top of
`js/booking.js`:

| `sheetUrl` | `whatsapp` | What happens when a guest presses the final button |
|---|---|---|
| empty | empty | **Preview** (today): nothing is sent, and the tool says so and gives the phone number |
| empty | set | **WhatsApp**: WhatsApp opens with the request typed out; the guest presses send |
| set | either | **Sheet + email**: the request is saved as a row in a Google Sheet and emailed to reception; with a WhatsApp number set, the guest also gets a one-tap WhatsApp button |

After changing either value, push to GitHub; Vercel redeploys in about 30 seconds.

## Option A: WhatsApp only (2 minutes, no accounts)

1. Make sure the booking number is on WhatsApp. The free WhatsApp Business app adds a
   greeting message, quick replies and labels such as "New booking" and "Confirmed".
2. In `js/booking.js` set `whatsapp: "23290417670"` (country code first, digits only).
3. Push.

The downside is that a request only reaches you if the guest actually presses send in WhatsApp.

## Option B: Google Sheet + email (10 minutes, free, recommended)

Every request is kept, even if the guest never opens WhatsApp. It works alongside Option A.

1. Sign in to the **hotel's** Google account and create a new sheet at https://sheets.new.
   Name it "Africa Waka Waka bookings".
2. File → Settings → Time zone: **(GMT+00:00) GMT** (Freetown) → Save.
3. Extensions → **Apps Script**. Delete the sample code, paste all of
   `google-apps-script.gs`, and put the booking email(s) in `NOTIFY` at the top. Save.
4. In the function menu choose **setup**, then **Run**. Google asks for permission. Because this is
   your own script it warns that the app is unverified: Advanced → Go to project → Allow.
5. **Deploy → New deployment →** gear icon → **Web app**.
   Execute as: **Me**. Who has access: **Anyone**. Deploy, then copy the **Web app URL**
   (it ends in `/exec`).
6. Open that URL in a browser. You should see `{"ok":true,...}`.
7. In `js/booking.js` set `sheetUrl: "<the /exec URL>"` and push.
8. Make a test booking on the live site. A row appears in **Bookings** and an email arrives.

Day to day: reception works from the sheet, setting **Status** to Confirmed, Declined or Cancelled.
They reply to the guest by WhatsApp or phone, or with Reply on the email, which goes straight
to the guest.

Editing the script later: Deploy → Manage deployments → pencil → Version: **New version** →
Deploy. The URL stays the same.

### Limits worth knowing

- A Gmail account can send about 100 emails a day from Apps Script (Google Workspace:
  about 1,500). Each booking uses one, or two with the guest copy.
- The web-app URL is public: anyone could post to it. A hidden form field and basic checks
  stop simple bots. If spam ever starts, make a new deployment and update `sheetUrl`.
- Requests are not instant confirmations. Reception still checks availability, including
  rooms sold on Booking.com and Expedia, before confirming.

## Taking deposits (optional, still no server)

When reception confirms, send a payment link in the same WhatsApp chat or email. A Stripe or
PayPal payment link, a Flutterwave link, or Orange Money / Afrimoney details all work.
Nothing on the website has to change.

## When to outgrow this

If requests reach several a day, or double bookings with Booking.com start happening, move to a
booking engine with a channel manager (for example Beds24 or Cloudbeds). It keeps availability in
sync across the website and the travel sites, and can take card payments. The booking button on
this site can then open that engine instead.
