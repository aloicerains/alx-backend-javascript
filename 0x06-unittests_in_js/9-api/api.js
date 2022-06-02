// express app
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(404).send('');
    return;
  } else
    res.status(200).send(`Payment methods for cart: ${req.params.id}`);
  });

const port = 7865;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`API available on localhost port 7865`);
});

