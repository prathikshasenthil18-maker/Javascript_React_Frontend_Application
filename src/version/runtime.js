/**
 * Runtime metadata for Customer Version 16 (ES2021 / Node.js 16).
 */
const RUNTIME = {
  customerVersion: 16,
  syntaxLabel: "ES2021 / Node.js 16",
  language: "javascript",
  projectType: "React Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=16",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Host Node may lag future Customer Versions (e.g. CV 26 on Node 24 hosts).
  const minHost = 16 > 24 ? 24 : 16;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 16), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 16, minHost: minHost };
}

module.exports = { RUNTIME, assertCompatibleNode };
