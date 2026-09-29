/**
 * Africa Waka Waka · booking inbox (Google Apps Script)
 *
 * Free, no server. Each booking request from the website becomes a row in this
 * Google Sheet and an email to reception (plus an optional copy to the guest).
 * Setup takes about 10 minutes: see SETUP.md next to this file.
 */

// ---- settings ---------------------------------------------------------------
var NOTIFY = ['bookings@africawakawaka.com']; // who is emailed for every request (edit me)
var SEND_GUEST_COPY = true; // email guests a copy when they gave an email address
var HOTEL_NAME = 'Africa Waka Waka';
var HOTEL_PHONE = '+232 90 417670';
var SHEET_NAME = 'Bookings';
var STATUSES = ['New', 'Confirmed', 'Declined', 'Cancelled'];
// -----------------------------------------------------------------------------

var COLUMNS = [
  'Received', 'Status', 'Reference', 'Arrival', 'Departure', 'Nights', 'Adults', 'Children',
  'Room', 'Estimate (USD)', 'Name', 'Phone', 'Email', 'Airport pickup', 'Flight time',
  'Flight number', 'Notes'
];

/** Run once from the editor (select "setup", press Run) to create the sheet. */
function setup() {
  var sheet = getSheet_();
  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build();
  sheet.getRange(2, 2, sheet.getMaxRows() - 1, 1).setDataValidation(rule);
  sheet.autoResizeColumns(1, COLUMNS.length);
  return 'Ready';
}

/** The website posts each booking here. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var b = JSON.parse(e.postData.contents);
    if (b.website) return json_({ ok: true }); // hidden field: only bots fill it in
    validate_(b);
    var sheet = getSheet_();
    sheet.appendRow([
      new Date(), 'New', b.ref, b.checkin, b.checkout, b.nights, b.adults, b.children,
      b.room.name, b.estimatedTotal, b.guest.name, b.guest.phone, b.guest.email,
      b.airportPickup ? 'Yes' : 'No', b.flight.arrival, b.flight.number, b.notes
    ].map(text_));
    notifyHotel_(b);
    if (SEND_GUEST_COPY && isEmail_(b.guest.email)) notifyGuest_(b);
    return json_({ ok: true, ref: b.ref });
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  } finally {
    lock.releaseLock();
  }
}

/** Open the web-app URL in a browser to check it is live. */
function doGet() {
  return json_({ ok: true, service: HOTEL_NAME + ' bookings' });
}

// ---- helpers ----------------------------------------------------------------
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  return sheet;
}

function validate_(b) {
  var need = b && b.ref && b.checkin && b.checkout && b.room && b.room.name && b.guest && b.guest.name;
  if (!need) throw new Error('Missing booking details');
  if (!b.guest.phone && !b.guest.email) throw new Error('A phone number or email is required');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.checkin) || !/^\d{4}-\d{2}-\d{2}$/.test(b.checkout)) throw new Error('Bad dates');
  ['name', 'phone', 'email'].forEach(function (k) {
    if (String(b.guest[k] || '').length > 200) throw new Error('Field too long');
  });
  if (String(b.notes || '').length > 2000) throw new Error('Notes too long');
  b.flight = b.flight || {};
}

// Keep guest-typed text as text, so a value starting with = + - @ is never run as a formula.
function text_(v) {
  if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
  return v === undefined || v === null ? '' : v;
}

function isEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || ''));
}

function esc_(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function rows_(b) {
  return [
    ['Reference', b.ref],
    ['Room', b.room.name],
    ['Arrival', b.checkin],
    ['Departure', b.checkout + ' (' + b.nights + ' night' + (b.nights === 1 ? '' : 's') + ')'],
    ['Guests', b.adults + ' adult(s), ' + b.children + ' child(ren)'],
    ['Estimate', '$' + b.estimatedTotal],
    ['Airport pickup', b.airportPickup ? 'Yes' + (b.flight.number ? ', flight ' + b.flight.number : '') + (b.flight.arrival ? ', landing ' + b.flight.arrival : '') : 'No'],
    ['Name', b.guest.name],
    ['Phone', b.guest.phone],
    ['Email', b.guest.email],
    ['Notes', b.notes]
  ];
}

function table_(rows) {
  return '<table cellpadding="6" style="border-collapse:collapse;font:14px Arial,sans-serif">' +
    rows.filter(function (r) { return r[1] !== undefined && r[1] !== ''; }).map(function (r) {
      return '<tr><td style="color:#666;border-bottom:1px solid #eee">' + esc_(r[0]) +
        '</td><td style="border-bottom:1px solid #eee"><b>' + esc_(r[1]) + '</b></td></tr>';
    }).join('') + '</table>';
}

function notifyHotel_(b) {
  var wa = String(b.guest.phone || '').replace(/\D/g, '');
  MailApp.sendEmail({
    to: NOTIFY.join(','),
    subject: 'New booking request ' + b.ref + ': ' + b.checkin + ' to ' + b.checkout + ', ' + b.room.name,
    replyTo: isEmail_(b.guest.email) ? b.guest.email : undefined,
    htmlBody: '<p>A new booking request came in from the website.</p>' + table_(rows_(b)) +
      (wa ? '<p><a href="https://wa.me/' + wa + '">Reply on WhatsApp</a></p>' : '') +
      '<p style="color:#666">Mark it Confirmed, Declined or Cancelled in the Bookings sheet.</p>'
  });
}

function notifyGuest_(b) {
  MailApp.sendEmail({
    to: b.guest.email,
    name: HOTEL_NAME,
    replyTo: NOTIFY[0],
    subject: 'Your booking request at ' + HOTEL_NAME + ' (' + b.ref + ')',
    htmlBody: '<p>Thank you, ' + esc_(String(b.guest.name).split(' ')[0]) + '. We have your request and will confirm shortly.</p>' +
      table_(rows_(b)) +
      '<p>Questions? Call us 24/7 on ' + esc_(HOTEL_PHONE) + '.</p><p>' + esc_(HOTEL_NAME) + ', Airport-Ferry Road, Lungi</p>'
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
