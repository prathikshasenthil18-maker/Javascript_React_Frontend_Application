import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { ASSET_MANIFEST, describeBuild } from "./build/assetManifest.js";
import { ENV_FLAGS } from "./build/envFlags.js";
import { CUSTOMER_VERSION } from "./version/featuresBrowser.js";

if (typeof window !== "undefined") {
  window.__APP_BUILD__ = {
    describe: describeBuild(),
    manifest: ASSET_MANIFEST,
    flags: ENV_FLAGS,
    customerVersion: CUSTOMER_VERSION,
  };
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
