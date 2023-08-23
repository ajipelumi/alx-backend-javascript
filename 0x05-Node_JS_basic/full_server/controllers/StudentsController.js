import readDatabase from '../utils';

// Create StudentsController class with 2 methods
class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2] === undefined ? '' : process.argv[2];
    const data = readDatabase(path);
    data.then((result) => {
      response.status(200);
      response.write('This is the list of our students\n');
      for (const key of Object.keys(result)) {
        const value = result[key];
        response.write(`Number of students in ${key}: ${value.list.length}. List: ${value.list.join(', ')}\n`);
      }
      response.send();
    }).catch((error) => {
      response.status(500);
      response.send(error.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv[2] === undefined ? '' : process.argv[2];
    const data = readDatabase(path);
    data.then((result) => {
      if (result[request.params.major]) {
        response.status(200);
        response.send(`List: ${result[request.params.major].list.join(', ')}`);
      } else {
        response.status(500);
        response.send('Major parameter must be CS or SWE');
      }
    }).catch((error) => {
      response.status(500);
      response.send(error.message);
    });
  }
}

// Export StudentsController class
export default StudentsController;
