// ----- Difference 1 -----

// 'var' variable can be accessed before its declaration
console.log(a);
// 'let' and 'const' variables can't be accessed before their declaration
// console.log(b);
// console.log(c);

var a = 20;
let b = 10;
const c = 5;

console.log(b);
console.log(c);

// ----- Difference 2 -----

// when a JS program is executed, three things come into existence :-
// 1. Global Execution Context
// 2. Global object ('window' in the case of browser)
// 3. 'this' variable which refers to the global object

// 'var' variables will associate themselves with the global window object
console.log(window.a);
console.log(this.a);

// 'let' and 'const' variables won't associate themselves with the global window object
// hence, undefined will be returned
console.log(window.b);
console.log(this.b);

console.log(window.c);
console.log(this.c);

// ----- Difference 3 -----

// 'var' is not block scoped
// 'let' and 'const' are block scoped

var d = 200; // global scope
let e = 30; // global scope
const f = 500; // global scope

{
  // variable 'd' is being redeclared
  var d = 100; // global scope
  let e = 120; // block scope
  const f = 50; // block scope

  {
    // variable 'd' is again being redeclared
    var d = 40; // global scope
    let e = 10; // block scope
    const f = 5; // block scope

    console.log(`d = ${d}, e = ${e}, F = ${f}`);
  }

  console.log(`d = ${d}, e = ${e}, F = ${f}`);
}

console.log(`d = ${d}, e = ${e}, F = ${f}`);

// Notes
// 1. 'const' variable has to declared and initialized at the same time

// const pi;  // wrong
// pi = 3.14;

const pi = 3.14; // right
console.log(pi);

// 2. 'var' variables can be redeclared many times

var name = 'Shubham';
var name = 'Suyash';
var name = 'Ashish';
console.log(name);

// 'let' variables can't be declared more than once

// let age = 21; // wrong
// let age = 22;

let age = 21; // right
age = 22;
