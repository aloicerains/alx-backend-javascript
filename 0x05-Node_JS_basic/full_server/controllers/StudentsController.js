// Students controller class
const readDatabase = require('../utils');
const path = '../database.csv';
const students = require('../3-read_file_async')


const ordered = (object) => {
  Object.keys(object).sort().reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  },
  {}
);

class StudentsController {
  static getAllStudents((req, resp) {
    resp.status(200).send('This is the list of our students\n');
  })
  
  static getAllStudentsByMajor((req, resp) {
    const data = await readDatabase(path);
    resp.status(200).send("Hello");
  })

}

