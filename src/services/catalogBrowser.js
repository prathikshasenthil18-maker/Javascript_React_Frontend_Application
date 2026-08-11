/**
 * Browser/Vite ESM catalog helpers — Node 12 / ES2019 only.
 */
export function catalogSummary(items) {
  var list = Array.isArray(items) ? items : [];
  var active = null;
  for (var i = list.length - 1; i >= 0; i -= 1) {
    if (list[i] && list[i].active) {
      active = list[i];
      break;
    }
  }
  var scores = list.map(function (item) { return item && item.score != null ? item.score : 0; });
  var sorted = scores.slice().sort(function (a, b) { return b - a; });
  var tags = list.map(function (item) { return item && item.sku ? item.sku : "untagged"; });
  return {
    activeSku: active && active.sku ? active.sku : "none",
    topScore: sorted.length ? sorted[0] : 0,
    lastTag: tags.length ? tags[tags.length - 1] : "untagged",
    hasScores: Object.prototype.hasOwnProperty.call({ scores: scores }, "scores"),
  };
}
