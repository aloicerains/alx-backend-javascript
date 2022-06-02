// Task 3 test suite
const chai = require('chai');
const expect = chai.expect;
// import sinon
const sinon = require('sinon');
const Utils = require('./utils.js');
const payments = require('./4-payment.js');

describe("sendPaymentRequestToApi", function() {
  it('should call Utils', function() {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    const spy = sinon.spy(console, 'log');
    payments(100, 20);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 10');
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
    stub.restore();
  });
});
