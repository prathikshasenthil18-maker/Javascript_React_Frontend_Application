#!/usr/bin/env python3
"""pydriller linked to the React project git history (repo root)."""
from __future__ import annotations

import json
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def main(max_commits: int = 200) -> None:
    try:
        from pydriller import Repository
    except ImportError:
        print("pydriller missing — pip install -r requirements-tools.txt", file=sys.stderr)
        raise SystemExit(1)

    churn = defaultdict(lambda: {"commits": 0, "added": 0, "removed": 0})
    commits_seen = 0
    for commit in Repository(str(ROOT)).traverse_commits():
        commits_seen += 1
        for mod in commit.modified_files:
            path = mod.new_path or mod.old_path
            if not path:
                continue
            path = path.replace("\", "/")
            churn[path]["commits"] += 1
            churn[path]["added"] += mod.added_lines
            churn[path]["removed"] += mod.deleted_lines
        if commits_seen >= max_commits:
            break

    top = sorted(churn.items(), key=lambda kv: kv[1]["commits"], reverse=True)[:10]
    out = {
        "project_root": str(ROOT),
        "commits_analyzed": commits_seen,
        "files_touched": len(churn),
        "top_churned_files": [{"path": p, **s} for p, s in top],
    }
    reports = ROOT / "reports" / "pydriller"
    reports.mkdir(parents=True, exist_ok=True)
    (reports / "churn.json").write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
