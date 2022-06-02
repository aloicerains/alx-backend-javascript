// Task 3 test suite
const chai = require('chai');
const expect = chai.expect;
// import sinon
const sinon = require('sinon');
const Utils = require('./utils.js');
const payments = require('./5-payment.js');

describe("Tests", function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('sendPaymentRequestToAPI', function() {
    payments(100, 20);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
    expect(console.log.calledOnce).to.be.true;
  });
  it('sendPaymentRequestToAPI', function() {
    payments(10, 10);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');
    expect(console.log.calledOnce).to.be.true;
  });
});
