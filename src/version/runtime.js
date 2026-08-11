/**
 * Runtime metadata for Customer Version 21 (ES2023+ / Node.js 21).
 */
const RUNTIME = {
  customerVersion: 21,
  syntaxLabel: "ES2023+ / Node.js 21",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=21",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 21 > 24 ? 24 : 21;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 21), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 21, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
