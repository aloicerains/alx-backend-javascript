// reading database
const fs = require('fs');
const {  parse } = require('csv-parse');

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(path)
      .pipe(parse({delimiter: ",", from_line: 2}))
      .on('data', (row) => {
        data.push(row[0]);
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (error) => {
        console.log(error.message);
	reject(error);
      });
  });
}
module.exports = readDatabase;
