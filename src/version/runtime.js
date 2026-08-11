/**
 * Runtime metadata for Customer Version 22 (ES2024 / Node.js 22).
 */
const RUNTIME = {
  customerVersion: 22,
  syntaxLabel: "ES2024 / Node.js 22",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=22",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 22 > 24 ? 24 : 22;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 22), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 22, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
