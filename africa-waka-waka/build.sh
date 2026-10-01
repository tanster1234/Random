#!/usr/bin/env sh
# Rebuilds js/film.js (three.js scene, tree-shaken + minified) from src/film/.
# Needs Node. Installs esbuild + three into a temp folder on first run.
set -e
cd "$(dirname "$0")"
TOOLS="${TOOLS_DIR:-.build-tools}"
if [ ! -d "$TOOLS/node_modules/three" ]; then
  mkdir -p "$TOOLS" && (cd "$TOOLS" && echo '{ "private": true }' > package.json && npm i --no-audit --no-fund esbuild@0.28.2 three@0.186.1 >/dev/null)
fi
NODE_PATH="$TOOLS/node_modules" "$TOOLS/node_modules/.bin/esbuild" src/film/entry.js \
  --bundle --minify --format=iife --target=es2019 --legal-comments=eof \
  --outfile=js/film.js
echo "built js/film.js ($(wc -c < js/film.js) bytes)"
