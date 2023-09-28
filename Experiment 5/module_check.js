// app.js

const mathUtils = require('./mathematics'); // Import the custom module

// Use the functions from the custom module
const resultAdd = mathUtils.add(5, 3);
const resultSubtract = mathUtils.subtract(10, 4);
const resultMultiply = mathUtils.multiply(6, 7);
const resultDivide = mathUtils.divide(8, 2);

console.log(`Addition: ${resultAdd}`);
console.log(`Subtraction: ${resultSubtract}`);
console.log(`Multiplication: ${resultMultiply}`);
console.log(`Division: ${resultDivide}`);
