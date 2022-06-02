// Async tests with done
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success)
      resolve({data: 'Successful response from the API'});
  });
};
module.exports = getPaymentTokenFromAPI;
