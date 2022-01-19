const add = require('./add');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');

const firstNumber = parseInt(process.argv[2]);
const secondNumber = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log(`result: ${add(firstNumber, secondNumber)}`);
} else if (process.argv[3] === 'times') {
  console.log(`result: ${multiply(firstNumber, secondNumber)}`);
} else if (process.argv[3] === 'minus') {
  console.log(`result: ${subtract(firstNumber, secondNumber)}`);
} else if (process.argv[3] === 'over') {
  console.log(`result: ${divide(firstNumber, secondNumber)}`);
}
