const countStudents = require('./utils');

countStudents("database.csv")
    .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.log(error.message);
    });
console.log("After!");
