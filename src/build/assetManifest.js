/**
 * Build-time asset manifest constants for Customer Version 26.
 */
export const ASSET_MANIFEST = {
  customerVersion: 26,
  syntax: "ES2026 target / Node.js 26",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
