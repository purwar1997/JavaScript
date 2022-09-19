// Hoisting
// Accessing variables and functions before their declaration is called hoisting

// ----- Hoisting Allowed -----

// variables declared using 'var' keyword and function statements can be accessed before declaration
console.log(a);
var a = 20;

console.log(print);
print();

// function statement
function print() {
  console.log('Hello World!');
}

// ----- Hoisting Not Allowed -----

// function expressions and arrow functions can't be invoked before their declaration
// but they can be logged to the console (result will be undefined)

console.log(printName);
// Type Error because JS will consider printName a variable not a function
// printName('Aman', 'Gupta');

// function expression
var printName = function (firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
};

printName('Aman', 'Gupta');

console.log(printDate);
// Type Error because JS will consider printDate a variable not a function
// printDate();

// arrow function
var printDate = () => {
  var now = new Date().toString();
  console.log(now);
};

printDate();

// let and const variables can't be accessed before their declaration because they are in 'temporal dead zone'
// Temporal Dead Zone: Phase that exists between the memory allocation of 'let' and 'const' variables
// and their declaration is called Temporal Dead Zone. In this zone, 'let' and 'const' variables are 'undefined'
// and can't be accessed before their declaration

// console.log(b); // Reference Error
let b;
console.log(b); // undefined

// console.log(c); // Reference Error
const c = 2;
console.log(c); // 2
