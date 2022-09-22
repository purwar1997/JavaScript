// destructuring
// a process to unpack values of an array and object to store them inside separate variables

// [] on the RHS means array declaration
// [] on the LHS means destructuring
let sciValues = [3.14, 9.8, 2.72, 1.414, 2.732];
let [pi, g, e, root2, root3] = sciValues;

console.log(pi, g, e, root2, root3);

// to skip values
let [a, , b, , c] = [12, 89, 9, 34, 0];
console.log(a, b, c);

let fullStack = [
  ['html', 'css', 'tailwind', 'javascript'],
  ['node.js', 'express', 'sql', 'mongodb'],
];

let [frontend, backend] = fullStack;
console.log(frontend, backend);

// setting default values
let [p = 1, q = 0, r = 0] = [12];
console.log(p, q, r);

// nested array
let [x1, [x2, x3], [x4, x5]] = [1, [2, 3], [4, 5]];
console.log(x1, x2, x3, x4, x5);

// destructring of objects
let user = {
  name: 'Shubham',
  age: 24,
  course: 'BCA',
  year: 2021,
  parents: { mother: 'Sangeeta' },
};

// variable name and property name should be same
let { name, age, course } = user;
console.log(name, course);

({ name: userName, age: userAge, course: degree } = user);
console.log(userName, userAge, degree);

// setting default values
({ college = 'IIT Delhi', year: passingYear = '2022' } = user);
console.log(college, passingYear);

({ parents: { mother: mom = '', father: dad = '' } = '' } = user);
console.log(mom, dad);

// ... => rest operator
// packs all the remaining values inside an array
let [num1, , num2, , , ...rest] = [2, 6, 9, 7, 67, 12, 90, 67];
console.log(num1, num2, rest);

// ... => spread operator
// unpack all the values of an array

let arr1 = [90, 78, 23, 780];
let arr2 = [9, 7, 2, 70, 0, 12, 54];

let arr3 = [...arr1, ...arr2, ...['Shubham', 'Hitesh', 'Anurag']];
console.log(arr3, arr3.length);

// ... on LHS => rest operator
// ... on RHS => spread operator

// use of spread operator in functions
let sum = (a, b, c, d, e) => a + b + c + d + e;
let numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers)); // ... => used in function call

// use of rest operator in functions
sum = (...numbers) => {
  // ... => used in function  definition
  // numbers will be an array
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
};

console.log(sum(1, 2, 3, 4, 5, 90, 56, 12, 78, 23, 76, 100, 4, 6, 0, 11, 10));
