## TypeScript

This repository contains the code and resources for learning about TypeScript.

**TypeScript** is a superset of JavaScript that adds static typing to the language. It is a popular choice for large projects, as it helps to catch errors early in the development process.

### Topics Covered

- **TypeScript Basics**: We learn about the basics of TypeScript, including how to install it, how to compile TypeScript code, and how to use the TypeScript compiler to check for errors.

- **TypeScript Types**: We learn about the different types available in TypeScript, including primitive types, arrays, tuples, enums, any, void, null, undefined, never, and object.

- **TypeScript Functions**: We learn about the different ways to define functions in TypeScript, including function declarations, function expressions, arrow functions, optional parameters, default parameters, rest parameters, and function overloading.

### Code Snippets

The following code snippets are examples of how to use TypeScript:

```typescript
// Declare a variable with a type annotation
let myName: string = "John";

// Declare a function with a return type annotation
function sayHello(name: string): string {
  return `Hello ${name}`;
}

// Declare a function with optional parameters
function sayHello(name?: string): string {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello";
  }
}

// Declare a function with default parameters
function sayHello(name: string = "World"): string {
  return `Hello ${name}`;
}

// Declare a function with rest parameters
function sayHello(...names: string[]): string {
  return `Hello ${names.join(", ")}`;
}
```

### Resources

The following resources are recommended for further learning and exploration of TypeScript:

[TypeScript Documentation](https://www.typescriptlang.org/docs/)

[TypeScript Overview in TypeScriptlang.org](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

[TypeScript Overview in W3Schools](https://www.w3schools.com/typescript/default.asp)

[TypeScript Overview in TutorialsPoint](https://www.tutorialspoint.com/typescript/index.htm)

[TypeScript Overview in JavaScript.info](https://javascript.info/typescript)