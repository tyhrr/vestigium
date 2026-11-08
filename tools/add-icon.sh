#!/bin/sh
# Copy Lucide SVG icons (ISC license, https://lucide.dev) into src/assets/icons/.
# Usage: tools/add-icon.sh leaf calendar users ...   (names from https://lucide.dev/icons)
#        tools/add-icon.sh --search sprout           (list matching icon names)
# No build step: the SVGs are committed and inlined or referenced from HTML.
set -eu
ROOT=$(cd "$(dirname "$0")/.." && pwd)
DEST="$ROOT/src/assets/icons"
VERSION="${LUCIDE_VERSION:-0.460.0}"
CACHE="${XDG_CACHE_HOME:-$HOME/.cache}/vestigium-lucide-$VERSION"

if [ ! -d "$CACHE/package/icons" ]; then
  mkdir -p "$CACHE"
  (cd "$CACHE" && npm pack "lucide-static@$VERSION" --silent >/dev/null && tar -xzf lucide-static-*.tgz)
fi

if [ "${1:-}" = "--search" ]; then
  ls "$CACHE/package/icons" | sed 's/\.svg$//' | grep -i -- "${2:?search term required}"
  exit 0
fi

[ $# -gt 0 ] || { echo "usage: $0 <icon-name>... | --search <term>" >&2; exit 1; }
mkdir -p "$DEST"
for name in "$@"; do
  src="$CACHE/package/icons/$name.svg"
  if [ -f "$src" ]; then
    cp "$src" "$DEST/$name.svg" && echo "added src/assets/icons/$name.svg"
  else
    echo "not found: $name (try --search)" >&2
  fi
done
