const features = require("../version/features");

function uniqueSkus(items) {
  const seen = {};
  const out = [];
  (items || []).forEach(function (item) {
    const sku = item && item.sku;
    if (sku && !seen[sku]) {
      seen[sku] = true;
      out.push(String(sku));
    }
  });
  return out;
}

function rankByScore(items) {
  const scores = (items || []).map(function (item) {
    return item && item.score != null ? item.score : 0;
  });
  return features.sortDesc(scores);
}

function sharedSkus(a, b) {
  if (typeof features.intersectKeys === "function") {
    return features.intersectKeys(
      (a || []).map(function (x) { return x && x.sku; }).filter(Boolean),
      (b || []).map(function (x) { return x && x.sku; }).filter(Boolean),
    );
  }
  const left = {};
  (a || []).forEach(function (x) {
    if (x && x.sku) left[x.sku] = true;
  });
  return (b || [])
    .map(function (x) { return x && x.sku; })
    .filter(function (sku) { return sku && left[sku]; })
    .filter(function (sku, idx, arr) { return arr.indexOf(sku) === idx; });
}

module.exports = { uniqueSkus, rankByScore, sharedSkus };
