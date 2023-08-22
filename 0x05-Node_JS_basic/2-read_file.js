const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    // Remove first line (headers)
    lines.shift();

    // Get student length print
    const students = lines.length;
    console.log(`Number of students: ${students}`);

    // Get each field
    const fields = {};

    for (const line of lines) {
      if (line) {
        // Split each student
        const student = line.split(',');
        // Get each student field
        const field = student[3];
        // If field is not in fields, add it
        if (!fields[field]) {
          fields[field] = [];
        }
        // Add student to field
        fields[field].push(student[0]);
      }
    }
    // Print each field
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        const count = list.length;
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
