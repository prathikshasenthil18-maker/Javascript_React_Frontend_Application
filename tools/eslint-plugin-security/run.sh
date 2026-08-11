#!/usr/bin/env bash
# Runs eslint-plugin-security against the React monolith project root (not an isolated fixture).
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
echo "[tools/eslint-plugin-security] cwd=$ROOT npm run lint:security"
npm run lint:security
