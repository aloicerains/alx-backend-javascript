// send payment function
const Utils = require('./utils.js');
const sendPaymentRequestToApi = function(totalAmount, totalShipping) {
  const calculateNumber = Utils.calculateNumber('SUM', totalAmount,
	                                        totalShipping);
  console.log(`The total is: ${calculateNumber}`);
};
module.exports = sendPaymentRequestToApi;
