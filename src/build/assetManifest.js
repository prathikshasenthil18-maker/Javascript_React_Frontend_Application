/**
 * Build-time asset manifest constants for Customer Version 20.
 */
export const ASSET_MANIFEST = {
  customerVersion: 20,
  syntax: "ES2023 / Node.js 20",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
