const request = require('request');
const url = "http://127.0.0.1:7865/";
request.get(url)
  .on('response', (data) => {
    console.log(data.statusCode);
    console.log(data.body);
  })
  .on('error', (err) => console.log(error));

