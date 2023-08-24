## Unittests in Javascript

This repository contains the code and resources for learning about unit testing in JavaScript.

**Unit testing** is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
Unit testing is often automated, and is a key component of test-driven development (TDD).

### Topics Covered

- **Unit Testing Basics**: We learn about the basics of unit testing, including the benefits of unit testing, the different types of unit tests, and the different types of unit testing frameworks.

- **Mocha**: We learn about the Mocha unit testing framework, including how to install it, how to write unit tests with it, and how to run unit tests with it.

- **Chai**: We learn about the Chai assertion library, including how to install it, how to write unit tests with it, and how to run unit tests with it.

- **Sinon**: We learn about the Sinon mocking library, including how to install it, how to write unit tests with it, and how to run unit tests with it.

### Code Snippets

The following code snippets are examples of how to use Mocha:

```javascript
// Declare a function to be tested
function add(a, b) {
  return a + b;
}

// Declare a test suite
describe("add", () => {
  // Declare a test
  it("should add two numbers", () => {
    // Declare an assertion
    assert.equal(add(1, 2), 3);
  });
});
```

### Resources

The following resources are recommended for further learning and exploration of unit testing in JavaScript:

[Mocha Documentation](https://mochajs.org/)
[Chai Documentation](https://www.chaijs.com/)
[Sinon Documentation](https://sinonjs.org/)