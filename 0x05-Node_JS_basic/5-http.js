// create http server
const http = require('http');
const host = '127.0.0.1';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
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
  }
});
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
