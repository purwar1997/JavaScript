// higher order functions
// functions which receive another function as an argument or return a function

// callback functions
// functions which are passed inside another function as an argument

let isEven = value => value % 2 === 0;

// every() returns true if its callback returns true for each value of an array
console.log([22, 2, 8, 10].every(isEven));
console.log([10, 24, 7, 4].every(isEven));

let square = n => n ** 2; // callback
let cube = (callback, n) => callback(n) * n; // HOF

console.log(cube(square, 5));
console.log(cube(square, 6));
console.log(cube(square, 3));

// setTimeout()
// Syntax: setTimeout(callback, timer)
// timer is in milliseconds

let course = function () {
  console.log('Welcome to the Full Stack JavaScript web developer bootcamp');
};

// setTimeout(course, 3000);

// setTimeout(() => {
//   console.log('Good Luck!');
// }, 3000);

// used to repeat a task after certain time interval
// setInterval(() => {
//   console.log('Learn to code');
// }, 3000);

// forEach() => higher order function
// Syntax: array.forEach(function(value, index, array) {  ...code...  })

let array = ['C', 'C++', 'Java', 'Python', 'JavaScript'];

array.forEach((language, index) =>
  console.log(`Language ${index + 1}: ${language}`)
);

// practice question
let coders = ['Hitesh', 'Shubham', 'Paras', 'Anurag'];
let newCoders = [];

coders.forEach((coder, index) =>
  newCoders.push(`Coder ${index + 1}: ${coder.toUpperCase()}`)
);

console.log(newCoders);

// map()
// Syntax: array.map(function(value, index, array) {  ...code...  })
// returns a new array

let numbers = [2, 9, 7, 12, 15];
let squares = numbers.map(number => number ** 2);
console.log(squares);

// filter()
// Syntax: array.filter(function(value, index, array) {  ...code... })
// returns an array

let country = ['India', 'Kenya', 'Japan', 'China', 'Norway', 'Sweden'];
console.log(country.filter(country => country.length == 5));
console.log(country.filter(country => country.length == 6));

// reduce()
// Syntax: array.reduce(function(accumulator, value, index, array) {  ...code...  }, initial_acc_value)
// Syntax: array.reduce(callback, initial_acc_value)
// returns a single value i.e. last accumulator value
// value returned by the callback function will be the next accumulator value
// accumulator value will get updated on each iteration

numbers = [2, 9, 7, 12, 15, 10, 20];
let sum = numbers.reduce((sum, num) => sum + num, 0);
console.log(sum);

let names = ['Roy', 'Aman', 'Kushal', 'Ami'];
let nameStr = names.reduce((acc, name) => acc + name + ' ', '');
console.log(nameStr);
