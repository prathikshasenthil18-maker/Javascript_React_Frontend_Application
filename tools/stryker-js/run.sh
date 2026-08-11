#!/usr/bin/env bash
# Runs stryker-js against the React monolith project root (not an isolated fixture).
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
echo "[tools/stryker-js] cwd=$ROOT npm run stryker"
npm run stryker
