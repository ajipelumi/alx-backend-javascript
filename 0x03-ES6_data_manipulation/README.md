## ES6 Data Manipulation

This repository contains the code and resources for learning about data manipulation in ES6.

**Data manipulation** is the process of changing data to make it easier to read or work with. It is a common task in programming, and is often done with the help of a library.

### Topics Covered

- **Array Manipulation**: We learn about array manipulation, and how it can be used to add, remove, and modify elements in an array. We also learn about the `map()`, `filter()`, and `reduce()` methods, new features in ES6, and how they can be used to manipulate arrays.

### Code Snippets

The following code snippet demonstrates how to use the `map()` method to manipulate an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

The following code snippet demonstrates how to use the `filter()` method to manipulate an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

The following code snippet demonstrates how to use the `reduce()` method to manipulate an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(sum); // 15
```

### Resources

- [MDN: Array Manipulation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Object Manipulation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)