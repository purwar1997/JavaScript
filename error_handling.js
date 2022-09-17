// Error Handling / Exception Handling
// try catch blocks are used to handle runtime errors
// try block contains main code
// code inside catch block will be executed if an error is thrown
// code inside finally block will be executed anyway

try {
  let firstName = 'Shubham';
  console.log(firstName + ' ' + lastName);
} catch (err) {
  // holds an error
  // console.log(err);
  console.log(err.name); // holds the name of error
  console.log(err.message); // holds error message
} finally {
  console.log('Code will be executed anyway');
}

try {
  const age = 21;
  age = 22;
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}

// throwing custom errors

// Example 1
try {
  let numbers = [23, 89, 100, 3, 0];

  for (let num of numbers) {
    if (num === 0) {
      // throw keyword is used to throw an error
      throw new Error('Number can not be divided by a zero');
    } else {
      console.log(100 / num);
    }
  }
} catch (err) {
  console.log(err.message);
}

// Example 2
try {
  let numbers = [12, 89, 76, 90];
  let index = 4;

  if (numbers[index] === undefined) {
    throw new Error('Index is out of reach');
  } else {
    console.log(numbers[index]);
  }
} catch (err) {
  console.log(err.message);
} finally {
  console.log('Practicing error handling');
}

// -------------------- //

// types of errors
// syntax error: when syntax rules are not followed while writing code

// reference error

// 1. when variables and functions are accessed which don't have any reference in memory
// console.log(college);
// console.log(sum());

// 2. when let and const variables are accessed before their declaration or intialization
// console.log(obj);
// let obj;

// console.log(obj2);
// const obj2 = { a: 1, b: 2 };

// type error

// Example 1
// const firstName = 'Shubham';
// firstName = 'Mansi';

// Example 2
// console.log(sum(9, 8));

// var sum = function (a, b) {
//   return a + b;
// };
