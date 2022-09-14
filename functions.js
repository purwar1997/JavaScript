// functions are used to write modular and reusable code

// Syntax =>

// function declaration / definition / statement
// function func(para1, para2, para3, ... ) {
//     ...code...
// }

// calling a function
// func(arg1, arg2, arg3, ...);

// function to print full name
function printFullName(firstName, lastName) {
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

let name = printFullName('Shubham', 'Purwar');
console.log(name);

// function to calculate area of a circle
function areaOfCircle(radius) {
  let area = Math.round(Math.PI * radius * radius * 100) / 100;
  return area;
}

console.log(areaOfCircle(9));
console.log(areaOfCircle(4));
console.log(areaOfCircle(10));

// sum of an array
function sumOfArray(arr) {
  let sum = 0;
  for (let value of arr) {
    sum = sum + value;
  }
  return sum;
}

let numbers = [1, 4, 5, 90, 7, 20];
console.log(sumOfArray(numbers));

// arrow function
// function and return keywords can be omitted

let square = x => console.log(x ** 2);
square(12);
square(21);

// sum of all elements
// ... => rest operator packs all the elements inside an array
// args will be an array

let sumOfAll = (...args) => {
  let sum = 0;
  for (let value of args) {
    sum = sum + value;
  }
  return sum;
};

console.log(sumOfAll(12, 9, 7, 45, 1));
console.log(sumOfAll(12, 9, 7));
console.log(sumOfAll(9, 8, 7, 0, 7, 9, 22, 3, 20, 15, 200));
