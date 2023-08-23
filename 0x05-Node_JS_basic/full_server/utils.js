import fs from 'fs';

function readDatabase(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
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
                list: [],
              };
            }

            // Add the student first name to the list of students for this field
            studentsByField[field].list.push(firstName);
          }
        }
        resolve(studentsByField);
      }
    });
  };
  return new Promise(promise);
}

export default readDatabase;
