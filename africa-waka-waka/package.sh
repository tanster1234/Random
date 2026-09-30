#!/usr/bin/env sh
# Zips the public website (and nothing else) into dist/africa-waka-waka-site.zip,
# ready to upload to public_html in cPanel's File Manager and extract there.
set -e
cd "$(dirname "$0")"
rm -rf dist && mkdir -p dist/site/assets/photos
cp -R index.html .htaccess css js assets vendor dist/site/
find dist/site -name .DS_Store -delete
(cd dist/site && zip -rqX ../africa-waka-waka-site.zip .)
rm -rf dist/site
echo "built dist/africa-waka-waka-site.zip ($(wc -c < dist/africa-waka-waka-site.zip) bytes)"
