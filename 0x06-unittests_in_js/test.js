const request = require('request');
const url = "http://127.0.0.1:7865/";
request.get(url)
      .on('response', (response) => {
        // expect(response.statusCode).to.equal(200);
       //  expect(JSON.parse(response.body)).to.include('Welcome to the payment system');
       //  done();
        console.log(response.statusCode);
	console.log(JSON.parse(response.body));
      })
      .on('error', (error) => done(error));

