// test cases
const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('check integers', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('check integer and decimal', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('check decimals', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('check decimals', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
