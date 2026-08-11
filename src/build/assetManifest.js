/**
 * Build-time asset manifest constants for Customer Version 16.
 */
export const ASSET_MANIFEST = {
  customerVersion: 16,
  syntax: "ES2021 / Node.js 16",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
