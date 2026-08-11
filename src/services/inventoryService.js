const {
  hasOwn,
  lastItem,
  sortDesc,
  findLastMatch,
  replaceAt,
} = require("../version/features");

function summarizeInventory(items) {
  const list = Array.isArray(items) ? items : [];
  const active = findLastMatch(list, function (item) {
    return item && item.active === true;
  });
  const scores = list.map(function (item) {
    return item && item.score != null ? item.score : 0;
  });
  const ranked = sortDesc(scores);
  return {
    count: list.length,
    activeSku: active && active.sku ? active.sku : "none",
    topScore: ranked.length ? ranked[0] : 0,
    lastSku: (lastItem(list) && lastItem(list).sku) || "none",
    hasMeta: hasOwn(list[0] || {}, "sku"),
  };
}

function pinFirst(items, pinned) {
  var base = items && items[0] ? items[0] : {};
  return replaceAt(items, 0, Object.assign({}, base, pinned, { pinned: true }));
}

module.exports = { summarizeInventory, pinFirst };
