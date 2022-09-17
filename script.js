// learning how call stack works using browser tools
var num1 = 20;
var num2 = 30;

function fullName() {
  var firstName = 'Paras';
  var lastName = 'Gupta';
  console.log(`${firstName} ${lastName}`);

  function message() {
    var str = `Hello World!`;
    console.log(str);
    console.log(this);
  }
  console.log(this);
  message();
}

console.log(this);
fullName();

// in all three cases, 'this' keyword refers to the same global window object

// Call stack is known by various names :-
// 1. Execution Context stack
// 2. Control stack
// 3. Program stack
// 4. Machine stack

// Lexical scope is also known as Lexical environment
