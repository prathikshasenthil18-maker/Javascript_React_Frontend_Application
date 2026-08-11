#!/usr/bin/env python3
"""pydriller smoke runner for this repository."""
from __future__ import annotations

from pathlib import Path

try:
    from pydriller import Repository
except ImportError as exc:
    raise SystemExit(
        "pydriller is not installed. Run: pip install -r requirements-tools.txt"
    ) from exc

root = Path(__file__).resolve().parents[1]
commits = 0
for commit in Repository(str(root)).traverse_commits():
    commits += 1
    if commits >= 5:
        break
print(f"pydriller_ok commits_sampled={commits} repo={root}")
