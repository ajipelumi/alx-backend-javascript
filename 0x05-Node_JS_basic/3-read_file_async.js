const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    if (data) {
      // Split the file into lines and remove empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Get the header and the indexes of the fields
      const header = lines[0].split(',');
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      // Create an object with the number of students by field
      const studentsByField = {};

      // For each line, get the field and the first name
      for (let i = 1; i < lines.length; i += 1) {
        const fields = lines[i].split(',');
        const field = fields[fieldIndex];
        const firstName = fields[firstNameIndex];

        // If the field or the first name is empty or not defined, skip it
        if (field && firstName) {
        // If the field is not defined in the object, create it
          if (!studentsByField[field]) {
          // The object will have a count and a list of students
            studentsByField[field] = {
              count: 0,
              list: [],
            };
          }

          // We found a student for this field, so increment the count
          studentsByField[field].count += 1;
          // Add the student first name to the list of students for this field
          studentsByField[field].list.push(firstName);
        }
      }

      // Print the number of students for each field
      console.log(`Number of students: ${lines.length - 1}`);
      for (const field of Object.keys(studentsByField)) {
        const { count } = studentsByField[field];
        const list = studentsByField[field].list.join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
      resolve();
    }
  });
});

module.exports = countStudents;
