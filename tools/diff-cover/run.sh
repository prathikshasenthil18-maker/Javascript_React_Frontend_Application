#!/usr/bin/env bash
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
npm run test:coverage
mkdir -p reports/diff-cover coverage
if command -v diff-cover >/dev/null 2>&1; then
  diff-cover coverage/lcov.info --html-report coverage/diff-cover.html || true
else
  echo "diff-cover not installed; pip install -r requirements-tools.txt" >&2
fi
cp -f coverage/lcov.info tools/diff-cover/lcov.info 2>/dev/null || true
echo "[tools/diff-cover] linked coverage from project nyc run"
