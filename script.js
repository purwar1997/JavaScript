// learning how call stack works using browser tools
var num1 = 20;
var num2 = 30;

function fullName() {
  var firstName = 'Paras';
  var lastName = 'Gupta';
  console.log(`${firstName} ${lastName}`);

  function message() {
    console.log(`Hello World!`);
  }
  message();
}

fullName();
