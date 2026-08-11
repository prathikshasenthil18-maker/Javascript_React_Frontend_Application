#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const matrix = JSON.parse(
  fs.readFileSync(path.join(root, "tool-matrix.json"), "utf8"),
);
const runtime = require("../src/version/runtime").RUNTIME;
console.log(
  JSON.stringify(
    {
      customerVersion: runtime.customerVersion,
      syntax: runtime.syntaxLabel,
      tools: matrix.tools,
      jsPack: [
        "src/version/features.js",
        "src/version/featuresBrowser.js",
        "src/version/runtime.js",
        "src/services/inventoryService.js",
        "src/services/orderService.js",
        "src/utils/collections.js",
        "src/utils/asyncPipeline.js",
        "src/build/assetManifest.js",
        "src/build/envFlags.js",
        "scripts/version-check.js",
        "scripts/build.js",
      ],
    },
    null,
    2,
  ),
);
