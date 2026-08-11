/**
 * Runtime metadata for Customer Version 20 (ES2023 / Node.js 20).
 */
const RUNTIME = {
  customerVersion: 20,
  syntaxLabel: "ES2023 / Node.js 20",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=20",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 20 > 24 ? 24 : 20;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 20), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 20, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
