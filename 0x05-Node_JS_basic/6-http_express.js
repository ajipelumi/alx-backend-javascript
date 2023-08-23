const express = require('express');

const app = express();

// Handle GET request for '/' route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245);

// Export app
module.exports = app;
