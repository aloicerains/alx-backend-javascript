
const countStudents = (path) => {
  const fs = require('fs');
  if (fs.existsSync(path) === false) {
    throw new Error('Cannot laod the database');
  }
  const { load } = require('csv-load-sync');
  const csv = load(path);
  console.log(`Number of students: ${csv.length}`);
  // console.log(csv);
  const fields = {};
  let count = 0;
  csv.forEach((record) => {
    if (record.field in fields) {
      let val = record.firstname;
      if (count < csv.length - 2) { val = ` ${val}`; }
      count++;
      fields[record.field].names.push(val);
      fields[record.field].count++;
    } else { fields[record.field] = { names: [record.firstname], count: 1 }; }
  });
  Object.entries(fields).forEach(([key, value]) => {
    console.log(`Number of students in ${key}: ${value.count}. List: ${value.names}`);
  });
};
module.exports = countStudents;
