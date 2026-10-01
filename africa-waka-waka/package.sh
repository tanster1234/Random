#!/usr/bin/env sh
# Zips the public website (and nothing else) into dist/africa-waka-waka-site.zip,
# ready to upload to public_html in cPanel's File Manager and extract there.
set -e
cd "$(dirname "$0")"
rm -rf dist && mkdir -p dist/site/assets/photos
cp -R index.html .htaccess book.php css js assets vendor dist/site/
find dist/site -name .DS_Store -delete
# Link each style sheet and script with a fingerprint of its contents (file.css?v=1a2b3c4d).
# GoDaddy's website firewall keeps copies of these files; a changed file gets a new address,
# so the firewall and browsers fetch it instead of pairing the new page with an old copy.
for f in css/*.css js/*.js vendor/*.js; do
  v=$( (sha1sum "$f" 2>/dev/null || shasum "$f") | cut -c1-8)
  sed -i.bak "s#\"$f\"#\"$f?v=$v\"#g" dist/site/index.html
done
rm -f dist/site/index.html.bak
(cd dist/site && zip -rqX ../africa-waka-waka-site.zip .)
rm -rf dist/site
echo "built dist/africa-waka-waka-site.zip ($(wc -c < dist/africa-waka-waka-site.zip) bytes)"
