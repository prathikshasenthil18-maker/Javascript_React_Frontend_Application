import React, { useMemo, useState } from "react";
import { catalogSummary } from "./services/catalogBrowser.js";
import { ASSET_MANIFEST } from "./build/assetManifest.js";
import { ENV_FLAGS } from "./build/envFlags.js";
import { CUSTOMER_VERSION, sortDesc } from "./version/featuresBrowser.js";

const syntaxLabel = "ES2022 / Node.js 18";

export default function App() {
  const [items, setItems] = useState([
    { sku: "react-kit", active: true, score: 91 },
    { sku: "vite-board", active: false, score: 77 },
    { sku: "eslint-pack", active: true, score: 88 },
  ]);
  const summary = useMemo(() => catalogSummary(items), [items]);
  const ranked = useMemo(() => sortDesc(items.map((i) => i.score ?? 0)), [items]);

  function bumpScores() {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        score: Math.min(100, (item.score ?? 0) + 1),
      }))
    );
  }

  return (
    <main className="card">
      <h1>React Frontend Application</h1>
      <p>
        Scenario <strong>1 - Monolithic</strong> · Customer Version 
        <strong>{CUSTOMER_VERSION}</strong>
      </p>
      <p>Syntax: {syntaxLabel}</p>
      <p>Build: {ASSET_MANIFEST.appName}</p>
      <p>Active SKU: {summary.activeSku}</p>
      <p>Top score: {summary.topScore}</p>
      <p>Ranked: {ranked.join(", ")}</p>
      <p>
        Flags: toSorted={String(ENV_FLAGS.supportsToSorted)} findLast={String(ENV_FLAGS.supportsFindLast)}
      </p>
      <button type="button" onClick={bumpScores}>
        Increment scores
      </button>
    </main>
  );
}
