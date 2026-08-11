const { exec } = require("child_process");

function runDiagnostics(hostname) {
  exec(`ping -c 1 ${hostname}`); // detect-child-process
}

function evaluateExpression(expr) {
  return eval(expr); // detect-eval-with-expression
}

module.exports = { runDiagnostics, evaluateExpression };
