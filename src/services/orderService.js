const { hasOwn, sortDesc, withCause } = require("../version/features");

function lineTotal(line) {
  const qty = line && line.qty != null ? line.qty : 0;
  const price = line && line.price != null ? line.price : 0;
  return qty * price;
}

function computeOrderTotal(order) {
  if (!hasOwn(order || {}, "items")) {
    throw withCause("order_items_required", { order: order });
  }
  const totals = (order.items || []).map(lineTotal);
  const ranked = sortDesc(totals);
  const subtotal = totals.reduce(function (acc, n) { return acc + n; }, 0);
  const discount = order.discountCode === "SAVE10" ? 0.1 : 0;
  const shipping = order.expressShipping ? 15 : 0;
  const total = Math.round((subtotal * (1 - discount) + shipping) * 100) / 100;
  return {
    subtotal: subtotal,
    total: total,
    largestLine: ranked.length ? ranked[0] : 0,
    lines: totals.length,
  };
}

module.exports = { lineTotal, computeOrderTotal };
