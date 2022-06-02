// express app
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

const port = 7865;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`API available on localhost port 7865`);
});

