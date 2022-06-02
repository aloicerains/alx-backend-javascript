// test cases
const calculateNumber = require("./2-calcul_chai.js");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function() {
  it("SUM", function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it("SUBTRACT", function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it("DIVIDE", function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it("DIVIDE by zero", function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
