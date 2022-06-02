const fs = require('fs');
const readline = require('readline');


const countStudents = (path) => {
  const data = [];
  return new Promise((resolve, reject) => {
    let stream;
    try {
      stream = fs.createReadStream(path);
    } catch (error) {
      console.log(error.message);
    }
    readline.createInterface({input: stream})
      .on("line", (row) => {
        data.push(row.split(","));
      })
      .on("close", () => {
        resolve(data);
      })
      .on("error", (error) => {
	 reject(error.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
}

module.exports = countStudents
