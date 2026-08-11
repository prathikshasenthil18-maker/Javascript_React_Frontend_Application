/**
 * Build-time asset manifest constants for Customer Version 24.
 */
export const ASSET_MANIFEST = {
  customerVersion: 24,
  syntax: "ES2024+ / Node.js 24",
  appName: "javascript-react-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
