#!/usr/bin/env bash
# Runs eslint-plugin-sonarjs against the React monolith project root (not an isolated fixture).
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
echo "[tools/eslint-plugin-sonarjs] cwd=$ROOT npm run lint:sonarjs"
npm run lint:sonarjs
