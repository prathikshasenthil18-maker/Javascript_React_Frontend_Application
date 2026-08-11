function processRetailOrder(order) {
  const lines = order.items || [];
  let total = 0;
  for (const line of lines) {
    const qty = line.qty || 0;
    const price = line.price || 0;
    total += qty * price;
  }
  if (order.discountCode === "SAVE10") {
    total *= 0.9;
  }
  if (order.expressShipping) {
    total += 15;
  }
  return { channel: "retail", total: Math.round(total * 100) / 100 };
}

module.exports = { processRetailOrder };
