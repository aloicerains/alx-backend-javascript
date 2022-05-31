// express server
const express = require('express');
const app = express();

const port = 1245;
const host = '127.0.0.1';
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const students = countStudents(process.argv[2]);
  res.status(200).write('This is the list of our students\n');
  students.then((data) => {
    res.write(`Number of students: ${data.total}\n`);
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'total') { return; }
      res.write(`Number of students in ${key}: ${value.count}. List: ${value.names}\n`);
    });
    res.end('\r');
  })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(port, host, () => {
  console.log(`Application running at http://${host}:${port}/`);
});

module.exports = app;
