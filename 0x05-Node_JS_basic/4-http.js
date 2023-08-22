const http = require('http');

// Create a server object
const app = http.createServer((req, res) => {
  // Write a response
  res.write('Hello Holberton School!');
  res.end();
});

// Start the server on port 1245
app.listen(1245);
