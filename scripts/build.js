#!/usr/bin/env node
const { spawnSync } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const check = spawnSync(process.execPath, [path.join("scripts", "version-check.js")], {
  cwd: root,
  stdio: "inherit",
  shell: false,
});
if (check.status !== 0) process.exit(check.status || 1);

const build = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["vite", "build"],
  { cwd: root, stdio: "inherit", shell: true },
);
process.exit(build.status || 1);
