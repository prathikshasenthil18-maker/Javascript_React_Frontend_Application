#!/usr/bin/env bash
# Runs npm-audit against the React monolith project root (not an isolated fixture).
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
echo "[tools/npm-audit] cwd=$ROOT npm run audit"
npm run audit
