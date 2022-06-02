// test cases
const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber", function() {
  it("SUM", function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it("SUBTRACT", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("DIVIDE", function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("DIVIDE by zero", function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
