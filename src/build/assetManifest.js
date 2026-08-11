/**
 * Build-time asset manifest constants for Customer Version 18.
 */
export const ASSET_MANIFEST = {
  customerVersion: 18,
  syntax: "ES2022 / Node.js 18",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
