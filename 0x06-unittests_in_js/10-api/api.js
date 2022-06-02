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

app.get('/available_payments', (req, res) => {
  res.status(200).send({payment_methods: {
    credit_cards: true,
    paypal: false
  }
  });
});

app.post('/login', (req, res) => {
  if (!req.body.userName) {
    res.status(404).send('Not found');
    return;
  }
  res.status(200).send(`Welcome ${req.body.userName}`);
});

const port = 7865;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`API available on localhost port 7865`);
});

