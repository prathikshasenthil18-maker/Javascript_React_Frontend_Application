const { expect } = require("chai");
const catalog = require("../src/domain/catalog");

describe("catalog domain", () => {
  it("normalizes sku", () => {
    expect(catalog.normalizeSku({ sku: " abc " })).to.equal("ABC");
  });

  it("picks last tag", () => {
    expect(catalog.pickLastTag(["a", "b", "c"])).to.equal("c");
  });

  it("sorts scores descending", () => {
    expect(catalog.sortScoresDesc([1, 9, 3])).to.deep.equal([9, 3, 1]);
  });

  it("finds last active item", () => {
    const items = [
      { sku: "a", active: true },
      { sku: "b", active: false },
      { sku: "c", active: true },
    ];
    expect(catalog.findLastActive(items).sku).to.equal("c");
  });
});
