<?php
/*
 * Africa Waka Waka · booking requests
 *
 * The booking tool on the website posts each request here. This script emails the request to
 * the hotel, and sends the guest a copy that says plainly it is a request, not a confirmed
 * booking. It sends through the hosting's own mail, so there is no outside service, account
 * or key.
 *
 * To switch it on, put the hotel's inbox in HOTEL_EMAIL, upload this file next to index.html
 * and make a test booking (see BOOKINGS.md). While HOTEL_EMAIL is empty the website stays in
 * preview mode and nothing is sent.
 */

// The inbox that receives booking requests (guests' replies come here too), and a second
// inbox that gets a copy of each request. Leave HOTEL_COPY as '' for no copy.
const HOTEL_EMAIL = 'contactafricawakawaka@gmail.com';
const HOTEL_COPY = 'awwreceptionist@gmail.com';

// The sender on both emails. Keep it an address at the website's own domain.
const FROM_EMAIL = 'bookings@africawakawaka.com';
const HOTEL_NAME = 'Africa Waka Waka';
const HOTEL_PHONE = '+232 90 417670';
const HOTEL_ADDRESS = 'Airport-Ferry Road, Lungi, Sierra Leone';
const SITE_URL = 'https://africawakawaka.com';

// Each request is also added to this spreadsheet file, one level above the public website
// folder, in case an email goes astray. Set it to '' to turn this off.
define('LOG_FILE', dirname(__DIR__) . '/booking-requests.csv');

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, private');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') reply(405, ['ok' => false, 'error' => 'method']);
if (!same_site()) reply(403, ['ok' => false, 'error' => 'origin']);

$in = json_decode((string) file_get_contents('php://input', false, null, 0, 20000), true);
if (!is_array($in)) reply(400, ['ok' => false, 'error' => 'invalid']);

// The booking tool asks this when it opens, to know whether to run in preview mode.
if (text($in, 'action') === 'status') reply(200, ['ok' => true, 'enabled' => HOTEL_EMAIL !== '']);
if (HOTEL_EMAIL === '') reply(503, ['ok' => false, 'error' => 'not_configured']);

// Only bots fill the hidden "website" field: answer as usual and send nothing.
if (text($in, 'website') !== '') reply(200, ['ok' => true, 'guestEmailed' => true]);

if (rate_limited()) reply(429, ['ok' => false, 'error' => 'rate_limited']);

$b = clean_booking($in);
if (is_string($b)) reply(400, ['ok' => false, 'error' => $b]);

if (!send_mail(HOTEL_EMAIL, hotel_subject($b), hotel_text($b), hotel_html($b), $b['email'], false, HOTEL_COPY)) {
    log_request($b, 'not sent');
    reply(502, ['ok' => false, 'error' => 'send_failed']);
}
$guestEmailed = send_mail($b['email'], guest_subject($b), guest_text($b), guest_html($b), HOTEL_EMAIL, true);
log_request($b, $guestEmailed ? 'hotel and guest' : 'hotel only');
reply(200, ['ok' => true, 'ref' => $b['ref'], 'guestEmailed' => $guestEmailed]);

/* ------------------------------------------------------------------ request checks */

function reply($status, $data)
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

// Browsers send an Origin header with every POST; refuse requests made from other websites.
function same_site()
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin === '') return true;
    $host = strtolower((string) parse_url($origin, PHP_URL_HOST));
    $self = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
    return $host !== '' && preg_replace('/^www\./', '', $host) === preg_replace('/^www\./', '', $self);
}

// Per visitor: 3 requests in 10 minutes and 10 a day. The site sits behind GoDaddy's firewall,
// which passes the visitor's address in X-Sucuri-ClientIP; that header could be faked by
// someone calling the hosting directly, so each connecting address is also capped at 60 an hour.
function rate_limited()
{
    $peer = $_SERVER['REMOTE_ADDR'] ?? '';
    $client = $peer;
    foreach (['HTTP_X_SUCURI_CLIENTIP', 'HTTP_X_FORWARDED_FOR'] as $h) {
        if (!empty($_SERVER[$h])) {
            $client = trim(explode(',', $_SERVER[$h])[0]);
            break;
        }
    }
    return over_limit('client ' . $client, [[600, 3], [86400, 10]]) || over_limit('peer ' . $peer, [[3600, 60]]);
}

function over_limit($key, $rules)
{
    $dir = rtrim(sys_get_temp_dir(), '/') . '/aww-booking-limits';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    $fh = @fopen($dir . '/' . sha1($key), 'c+');
    if (!$fh) return false; // can't count, so don't turn anyone away
    flock($fh, LOCK_EX);
    $now = time();
    $times = array_filter(array_map('intval', explode(',', (string) stream_get_contents($fh))), function ($t) use ($now) {
        return $t > $now - 86400;
    });
    $over = false;
    foreach ($rules as $rule) {
        $recent = array_filter($times, function ($t) use ($now, $rule) {
            return $t > $now - $rule[0];
        });
        if (count($recent) >= $rule[1]) $over = true;
    }
    if (!$over) {
        $times[] = $now;
        ftruncate($fh, 0);
        rewind($fh);
        fwrite($fh, implode(',', $times));
    }
    flock($fh, LOCK_UN);
    fclose($fh);
    return $over;
}

// Checks every field and returns the booking, or the name of the first bad field.
// Anything that goes into the guest's email is kept short and plain, so the form can't be
// used to send other people messages.
function clean_booking($in)
{
    $guest = isset($in['guest']) && is_array($in['guest']) ? $in['guest'] : [];
    $room = isset($in['room']) && is_array($in['room']) ? $in['room'] : [];
    $flight = isset($in['flight']) && is_array($in['flight']) ? $in['flight'] : [];

    $email = trim(text($guest, 'email'));
    if ($email === '' || strlen($email) > 120 || !filter_var($email, FILTER_VALIDATE_EMAIL)) return 'email';
    $name = one_line(text($guest, 'name'), 80);
    if ($name === '') return 'name';

    $checkin = day(text($in, 'checkin'));
    $checkout = day(text($in, 'checkout'));
    if (!$checkin || !$checkout) return 'dates';
    $nights = (int) $checkin->diff($checkout)->format('%r%a');
    $earliest = new DateTime('-2 days', new DateTimeZone('UTC'));
    $latest = new DateTime('+2 years', new DateTimeZone('UTC'));
    if ($nights < 1 || $nights > 60 || $checkin < $earliest || $checkin > $latest) return 'dates';

    $adults = number($in, 'adults', 1, 5);
    $children = number($in, 'children', 0, 4);
    if ($adults === null || $children === null) return 'guests';

    $roomName = one_line(text($room, 'name'), 80);
    $rate = number($room, 'rate', 1, 100000);
    if ($roomName === '' || !preg_match('/^[\p{L}\p{N} ·,&()\'\-]+$/u', $roomName) || $rate === null) return 'room';

    $ref = text($in, 'ref');
    if (!preg_match('/^AWW-[A-Z0-9]{6}$/', $ref)) $ref = 'AWW-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 6));
    $landing = text($flight, 'arrival');
    $first = one_line(preg_replace('/[^\p{L}\p{M} .\'\-]/u', '', explode(' ', $name)[0]), 40);

    return [
        'ref' => $ref,
        'checkin' => $checkin,
        'checkout' => $checkout,
        'nights' => $nights,
        'adults' => $adults,
        'children' => $children,
        'room' => $roomName,
        'rate' => $rate,
        'total' => $rate * $nights,
        'pickup' => !empty($in['airportPickup']),
        'flight' => strtoupper(one_line(preg_replace('/[^A-Za-z0-9 \-]/', '', text($flight, 'number')), 12)),
        'landing' => preg_match('/^([01]\d|2[0-3]):[0-5]\d$/', $landing) ? $landing : '',
        'name' => $name,
        'first' => $first,
        'email' => $email,
        'phone' => one_line(preg_replace('/[^0-9+()\-. ]/', '', text($guest, 'phone')), 30),
        'notes' => multi_line(text($in, 'notes'), 1500),
    ];
}

function text($arr, $key)
{
    return isset($arr[$key]) && is_scalar($arr[$key]) ? (string) $arr[$key] : '';
}

function number($arr, $key, $min, $max)
{
    if (!isset($arr[$key]) || !is_numeric($arr[$key])) return null;
    $n = (int) $arr[$key];
    return $n == $arr[$key] && $n >= $min && $n <= $max ? $n : null;
}

function day($s)
{
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $s)) return null;
    $d = DateTime::createFromFormat('!Y-m-d', $s, new DateTimeZone('UTC'));
    return $d && $d->format('Y-m-d') === $s ? $d : null;
}

function cut($s, $max)
{
    return preg_match('/^.{0,' . (int) $max . '}/su', $s, $m) ? $m[0] : '';
}

function one_line($s, $max)
{
    return cut(trim(preg_replace('/[\s\p{Cc}]+/u', ' ', $s)), $max);
}

function multi_line($s, $max)
{
    $s = preg_replace('/[^\P{Cc}\n\t]/u', '', str_replace(["\r\n", "\r"], "\n", $s));
    return cut(trim(preg_replace("/\n{3,}/", "\n\n", $s)), $max);
}

/* ------------------------------------------------------------------ the two emails */

function details($b)
{
    $pickup = 'No';
    if ($b['pickup']) {
        $pickup = 'Yes, free';
        if ($b['flight'] !== '') $pickup .= ', flight ' . $b['flight'];
        if ($b['landing'] !== '') $pickup .= ', landing ' . $b['landing'];
    }
    return [
        'Reference' => $b['ref'],
        'Room' => $b['room'],
        'Arrival' => $b['checkin']->format('l j F Y'),
        'Departure' => $b['checkout']->format('l j F Y'),
        'Nights' => (string) $b['nights'],
        'Guests' => plural($b['adults'], 'adult', 'adults') . ($b['children'] ? ', ' . plural($b['children'], 'child', 'children') : ''),
        'Estimated total' => money($b['total']) . ' (' . money($b['rate']) . ' a night)',
        'Airport pickup' => $pickup,
    ];
}

function hotel_subject($b)
{
    return 'Booking request ' . $b['ref'] . ': ' . $b['room'] . ', ' . $b['checkin']->format('D j M') . ' to ' . $b['checkout']->format('D j M');
}

function hotel_rows($b)
{
    return details($b) + [
        'Name' => $b['name'],
        'Phone' => $b['phone'] !== '' ? $b['phone'] : '-',
        'Email' => $b['email'],
        'Notes' => $b['notes'] !== '' ? $b['notes'] : '-',
    ];
}

function hotel_text($b)
{
    return "New booking request from the website.\n\n"
        . text_rows(hotel_rows($b))
        . "\nThe guest has been emailed a copy saying this is a request, not a confirmed booking, and that you will reply to confirm.\n"
        . "Check availability, then reply to this email to answer the guest directly.\n";
}

function hotel_html($b)
{
    return page(
        'New booking request',
        '<p style="margin:0 0 18px;">' . h($b['name']) . ' sent this from the website. They have been emailed a copy saying it is a request, not a confirmed booking, and that you will reply to confirm.</p>'
        . html_rows(hotel_rows($b))
        . '<p style="margin:18px 0 0;">Check availability, then reply to this email to answer the guest directly.</p>'
    );
}

function guest_subject($b)
{
    return 'Your booking request ' . $b['ref'] . ' (not yet confirmed) · ' . HOTEL_NAME;
}

function guest_rows($b)
{
    return details($b) + ['Status' => 'Waiting for the hotel to confirm'];
}

function guest_text($b)
{
    return 'Hello' . ($b['first'] !== '' ? ' ' . $b['first'] : '') . ",\n\n"
        . 'Thank you for your booking request at ' . HOTEL_NAME . ".\n\n"
        . "PLEASE NOTE: this is not a booking confirmation. Your room is not reserved yet.\n\n"
        . "Our reception will check availability and reply to this email to confirm your stay, or to suggest other dates or rooms. Your booking is confirmed only when you receive that reply.\n\n"
        . "YOUR REQUEST\n" . text_rows(guest_rows($b))
        . "\nNothing has been charged. Questions? Reply to this email or call us on " . HOTEL_PHONE . ", day or night.\n\n"
        . HOTEL_NAME . "\n" . HOTEL_ADDRESS . "\n" . SITE_URL . "\n";
}

function guest_html($b)
{
    return page(
        'We’ve received your booking request',
        '<p style="margin:0 0 14px;">Hello' . ($b['first'] !== '' ? ' ' . h($b['first']) : '') . ',</p>'
        . '<p style="margin:0 0 18px;">Thank you for your booking request at ' . HOTEL_NAME . '.</p>'
        . '<p style="margin:0 0 18px;padding:14px 16px;border-radius:12px;background:#f3e1d6;color:#7e3219;font-weight:bold;">This is not a booking confirmation. Your room is not reserved yet.</p>'
        . '<p style="margin:0 0 22px;">Our reception will check availability and reply to this email to confirm your stay, or to suggest other dates or rooms. Your booking is confirmed only when you receive that reply.</p>'
        . html_rows(guest_rows($b))
        . '<p style="margin:18px 0 0;">Nothing has been charged. Questions? Reply to this email or call us on <a href="tel:' . preg_replace('/[^0-9+]/', '', HOTEL_PHONE) . '" style="color:#b4502b;">' . HOTEL_PHONE . '</a>, day or night.</p>'
    );
}

function text_rows($rows)
{
    $out = '';
    foreach ($rows as $k => $v) $out .= $k . ': ' . str_replace("\n", "\n  ", $v) . "\n";
    return $out;
}

function html_rows($rows)
{
    $out = '';
    foreach ($rows as $k => $v) {
        $out .= '<tr><td style="padding:10px 0;border-bottom:1px solid #e6ddd0;color:#4b4139;vertical-align:top;white-space:nowrap;padding-right:18px;">' . h($k) . '</td>'
            . '<td style="padding:10px 0;border-bottom:1px solid #e6ddd0;font-weight:bold;text-align:right;">' . nl2br(h($v)) . '</td></tr>';
    }
    return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:15px;">' . $out . '</table>';
}

function page($title, $body)
{
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>'
        . '<body style="margin:0;padding:0;background:#f6f0e6;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f0e6;"><tr><td align="center" style="padding:28px 14px;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fbf8f2;border:1px solid #e6ddd0;border-radius:16px;">'
        . '<tr><td style="padding:28px 26px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#1b1612;">'
        . '<p style="margin:0 0 12px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:bold;color:#b4502b;">' . HOTEL_NAME . '</p>'
        . '<h1 style="margin:0 0 18px;font-family:Georgia,\'Times New Roman\',serif;font-size:26px;line-height:1.25;font-weight:normal;color:#1b1612;">' . h($title) . '</h1>'
        . $body
        . '</td></tr></table>'
        . '<p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#7a6d62;">' . HOTEL_NAME . ' · ' . HOTEL_ADDRESS . ' · <a href="' . SITE_URL . '" style="color:#7a6d62;">' . preg_replace('#^https?://#', '', SITE_URL) . '</a></p>'
        . '</td></tr></table></body></html>';
}

function h($s)
{
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

function money($n)
{
    return '$' . number_format($n);
}

function plural($n, $one, $many)
{
    return $n . ' ' . ($n === 1 ? $one : $many);
}

/* ------------------------------------------------------------------ sending and the log */

function send_mail($to, $subject, $text, $html, $replyTo, $autoReply, $cc = '')
{
    if (!function_exists('mail')) return false;
    $boundary = '=_aww_' . bin2hex(random_bytes(12));
    $headers = [
        'From: ' . HOTEL_NAME . ' <' . FROM_EMAIL . '>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
    ];
    if ($cc !== '') $headers[] = 'Cc: ' . $cc;
    if ($autoReply) $headers[] = 'Auto-Submitted: auto-replied';
    $part = function ($type, $content) use ($boundary) {
        return '--' . $boundary . "\r\n"
            . 'Content-Type: ' . $type . "; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
            . quoted_printable_encode(str_replace("\n", "\r\n", str_replace("\r\n", "\n", $content))) . "\r\n";
    };
    $body = $part('text/plain', $text) . $part('text/html', $html) . '--' . $boundary . "--\r\n";
    $subject = encode_header($subject);
    $headers = implode("\r\n", $headers);
    // -f sets the return address to FROM_EMAIL, which helps delivery; some servers refuse it.
    return @mail($to, $subject, $body, $headers, '-f' . FROM_EMAIL) || @mail($to, $subject, $body, $headers);
}

// Subjects with characters outside plain ASCII (like the "·" in room names) are encoded in
// short UTF-8 pieces, split between whole characters.
function encode_header($s)
{
    if (!preg_match('/[^\x20-\x7E]/', $s)) return $s;
    $words = [];
    $chunk = '';
    foreach (preg_split('//u', $s, -1, PREG_SPLIT_NO_EMPTY) as $char) {
        if (strlen($chunk . $char) > 45) {
            $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
            $chunk = '';
        }
        $chunk .= $char;
    }
    $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
    return implode(' ', $words);
}

function log_request($b, $emails)
{
    if (LOG_FILE === '') return;
    // Never write the log inside the public website folder.
    $root = realpath($_SERVER['DOCUMENT_ROOT'] ?? '');
    $dir = realpath(dirname(LOG_FILE));
    if (!$dir || ($root && strpos($dir . '/', rtrim($root, '/') . '/') === 0)) return;
    $isNew = !is_file(LOG_FILE);
    $fh = @fopen(LOG_FILE, 'a');
    if (!$fh) return;
    if ($isNew) {
        @chmod(LOG_FILE, 0600);
        fputcsv($fh, ['Received (UTC)', 'Reference', 'Emails sent', 'Name', 'Email', 'Phone', 'Room', 'Arrival', 'Departure', 'Nights', 'Adults', 'Children', 'Estimated total', 'Airport pickup', 'Flight', 'Landing', 'Notes'], ',', '"', '\\');
    }
    $row = [gmdate('Y-m-d H:i'), $b['ref'], $emails, $b['name'], $b['email'], $b['phone'], $b['room'], $b['checkin']->format('Y-m-d'), $b['checkout']->format('Y-m-d'), $b['nights'], $b['adults'], $b['children'], $b['total'], $b['pickup'] ? 'yes' : 'no', $b['flight'], $b['landing'], $b['notes']];
    // A leading = + - or @ would make a spreadsheet treat the cell as a formula.
    $row = array_map(function ($v) {
        return preg_match('/^[=+\-@]/', (string) $v) ? "'" . $v : $v;
    }, $row);
    fputcsv($fh, $row, ',', '"', '\\');
    fclose($fh);
}
