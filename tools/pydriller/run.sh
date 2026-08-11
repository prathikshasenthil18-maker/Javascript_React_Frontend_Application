#!/usr/bin/env bash
set -euo pipefail
TOOL_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TOOL_DIR/../.." && pwd)"
cd "$ROOT"
python tools/pydriller/run.py
