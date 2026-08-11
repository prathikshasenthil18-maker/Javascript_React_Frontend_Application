/**
 * Build-time asset manifest constants for Customer Version 12.
 */
export const ASSET_MANIFEST = {
  customerVersion: 12,
  syntax: "ES2019 / Node.js 12",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
