const { expect } = require("chai");
const { add, divide, isEven } = require("../src/domain/calculator");

describe("calculator", () => {
  it("adds numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("divides numbers", () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it("rejects divide by zero", () => {
    expect(() => divide(1, 0)).to.throw("cannot divide by zero");
  });

  it("detects even numbers", () => {
    expect(isEven(4)).to.equal(true);
    expect(isEven(5)).to.equal(false);
  });
});
