
const countStudents = (path) => {
  const fs = require('fs');
  if (fs.existsSync(path) === false) {
    throw new Error('Cannot laod the database');
  }
  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({ firstName: student[0], field: student[3] }));
  const cs = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  const swe = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in CS: ${swe.length}. List: ${swe.join(', ')}`);
};
module.exports = countStudents;
