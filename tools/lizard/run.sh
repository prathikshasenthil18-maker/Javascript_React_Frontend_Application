#!/usr/bin/env bash
# Runs lizard against the React monolith project root (not an isolated fixture).
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
echo "[tools/lizard] cwd=$ROOT npm run lizard"
npm run lizard
