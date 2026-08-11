/**
 * Runtime metadata for Customer Version 26 (ES2026 target / Node.js 26).
 */
const RUNTIME = {
  customerVersion: 26,
  syntaxLabel: "ES2026 target / Node.js 26",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=26",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 26 > 24 ? 24 : 26;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 26), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 26, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
