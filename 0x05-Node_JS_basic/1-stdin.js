const process = require('process');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
