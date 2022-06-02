// function that counts the number of students
const countStudents = async (path) => {
  const fs = require('fs');
  const getStream = require('get-stream');
  const {  parse } = require('csv-parse');
 // fs.access(path, fs.constants.F_OK, (error) => {
   // if (error) throw new Error("Cannot load the database");
 // });
  if (fs.existsSync(path) === false) {
     throw new Error('Cannot laod the database');
  }
  if (path !== null) {
    const records = await fs.createReadStream(path)
      .pipe(parse({delimiter: ",", from_line: 2}))
    const data = await getStream.array(records);
    let count = 0;
    console.log(`Number of students: ${data.length}`);
    let fields = {};
    data.forEach((element) => {
      if (element[element.length - 1] in fields) {
	let val = element[0]
	if (count < data.length - 2)
          val = ` ${val}`;
	count++;
        fields[element[element.length - 1]].names.push(val);
	fields[element[element.length - 1]].count++;
      } else
	fields[element[element.length - 1]] = {"names": [element[0]], "count": 1};
    });
    Object.entries(fields).forEach(([key, value]) => {
    console.log(`Number of students in ${key}: ${value.count}. List: ${value.names}`);
  });
  fields.total = data.length;
  return fields;
  }
  
}


module.exports = countStudents
