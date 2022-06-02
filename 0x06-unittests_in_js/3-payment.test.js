// Task 3 test suite
const chai = require('chai');
const expect = chai.expect;
// import sinon
const sinon = require('sinon');
const Utils = require('./utils.js');
const payments = require('./3-payment.js');

describe("sendPaymentRequestToApi", function() {
  it('should call Utils', function() {
    const spy = sinon.spy(Utils, "calculateNumber");
    payments(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore()
  });
});
