const features = require("../version/features");

async function mapSeries(items, worker) {
  const out = [];
  const list = items || [];
  for (let i = 0; i < list.length; i += 1) {
    out.push(await worker(list[i]));
  }
  return out;
}

function createGate() {
  if (typeof features.deferred === "function") {
    return features.deferred();
  }
  let resolve;
  let reject;
  const promise = new Promise(function (res, rej) {
    resolve = res;
    reject = rej;
  });
  return { promise: promise, resolve: resolve, reject: reject };
}

async function settleAll(tasks) {
  if (typeof Promise.allSettled === "function") {
    return Promise.allSettled(tasks);
  }
  return Promise.all(
    (tasks || []).map(function (p) {
      return Promise.resolve(p).then(
        function (value) { return { status: "fulfilled", value: value }; },
        function (reason) { return { status: "rejected", reason: reason }; },
      );
    }),
  );
}

module.exports = { mapSeries, createGate, settleAll, customerVersion: 21 };
