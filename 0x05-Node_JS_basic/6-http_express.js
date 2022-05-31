// express server
const express = require('express');
const app = express();

const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.listen(port, host, () => {
  console.log(`Application running at http://${host}:${port}/`);
});

module.exports = app;
