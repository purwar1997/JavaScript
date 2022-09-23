// IIFE => Immediately Invoked Function Expressions
// Also known as 'Self Executing Anonymous Functions'

//  Syntax: (function () {
//     statements...
// })()

(function () {
  console.log('Hello, I am IIFE');
  console.log('I will be immediately called');
})();

// Self executing arrow function
(() => {
  console.log('I am an arrow function');
})();

// passing arguments
((name, city, state) => {
  console.log(`${name} from ${city}, ${state}`);
})('Kapil', 'Kanpur', 'UP');

(function (college) {
  let person = 'Larry';
  console.log(`${person} studies in ${college}`);
})('MIT');
