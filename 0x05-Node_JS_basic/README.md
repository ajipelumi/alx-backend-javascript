## Node JS Basics

This repository contains the code and resources for learning about Node JS.

**Node JS** is a JavaScript runtime environment that allows us to run JavaScript code outside of the browser.
It is built on top of the V8 JavaScript engine, which is the same engine that powers Google Chrome.

### Topics Covered

- **Node JS Basics**: We learn about the basics of Node JS, including how to install it, how to run Node JS code, and how to use the Node JS REPL.

- **Node JS Modules**: We learn about how to use modules in Node JS, including how to import and export modules, how to use the CommonJS module system, and how to use the ES6 module system.

- **Process Module**: We learn about the `process` module in Node JS, including how to use it to access command line arguments and environment variables.

- **File System Module**: We learn about the `fs` module in Node JS, including how to use it to read and write files.

- **HTTP Module**: We learn about the `http` module in Node JS, including how to use it to create a web server.

- **Express**: We learn about the Express framework, including how to use it to create a web server.

### Code Snippets

The following code snippets are examples of how to use Node JS:

```javascript
// Import a module
const fs = require("fs");

// Export a module
module.exports = {
  sayHello: function(name) {
    return `Hello ${name}`;
  }
};

// Access command line arguments
process.argv[2];

// Access environment variables
process.env.PORT;

// Read a file
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Create a web server
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Create a web server using Express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

### Resources

The following resources are recommended for further learning and exploration of Node JS:

[Node JS Documentation](https://nodejs.org/en/docs/)  
[Node JS Overview in Nodejs.org](https://nodejs.org/en/about/)  
[Node JS Overview in W3Schools](https://www.w3schools.com/nodejs/default.asp)  
[Express Documentation](https://expressjs.com/en/4x/api.html)  
[Express Overview in Expressjs.com](https://expressjs.com/en/starter/basic-routing.html)  
[Express Overview in W3Schools](https://www.w3schools.com/nodejs/nodejs_express.asp)