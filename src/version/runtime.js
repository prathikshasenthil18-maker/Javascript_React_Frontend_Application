/**
 * Runtime metadata for Customer Version 18 (ES2022 / Node.js 18).
 */
const RUNTIME = {
  customerVersion: 18,
  syntaxLabel: "ES2022 / Node.js 18",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=18",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 18 > 24 ? 24 : 18;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 18), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 18, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
