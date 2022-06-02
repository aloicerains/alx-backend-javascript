// Task 6 tests
const chai = require('chai');
const expect = chai.expect;
// import sinon
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe("getPaymentTokenFromAPI", function() {
  it("should test getPaymentTokenFromAPI", function(done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.include({data: 'Successful response from the API'});
	done();
      })
      .catch((err) => done(err));
  });
});
