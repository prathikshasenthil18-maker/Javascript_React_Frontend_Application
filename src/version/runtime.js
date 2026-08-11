/**
 * Runtime metadata for Customer Version 14 (ES2020 / Node.js 14).
 */
const RUNTIME = {
  customerVersion: 14,
  syntaxLabel: "ES2020 / Node.js 14",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=14",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 14 > 24 ? 24 : 14;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 14), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 14, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
