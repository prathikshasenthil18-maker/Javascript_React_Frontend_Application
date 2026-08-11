const { expect } = require("chai");
const features = require("../src/version/features");
const { RUNTIME } = require("../src/version/runtime");
const { summarizeInventory } = require("../src/services/inventoryService");
const { computeOrderTotal } = require("../src/services/orderService");

describe("version js pack", function () {
  it("reports customer version", function () {
    expect(features.nodeMajor()).to.equal(RUNTIME.customerVersion);
  });

  it("sorts scores with version-appropriate API", function () {
    expect(features.sortDesc([1, 8, 3])).to.deep.equal([8, 3, 1]);
  });

  it("summarizes inventory", function () {
    const summary = summarizeInventory([
      { sku: "a", active: false, score: 10 },
      { sku: "b", active: true, score: 40 },
      { sku: "c", active: true, score: 25 },
    ]);
    expect(summary.activeSku).to.equal("c");
    expect(summary.topScore).to.equal(40);
  });

  it("computes order totals", function () {
    const result = computeOrderTotal({
      items: [
        { qty: 2, price: 10 },
        { qty: 1, price: 5 },
      ],
      discountCode: "SAVE10",
      expressShipping: true,
    });
    expect(result.subtotal).to.equal(25);
    expect(result.total).to.equal(37.5);
  });
});
