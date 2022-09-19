// Closure: Function bundled with its lexical scope/environment is called closure
// due to closure, function gets the access of variables outside its scope

function sum() {
  const num1 = 34;
  return function (num2) {
    console.log(num1 + num2);
  };
}

const sum1 = sum();
sum1(12);

const sum2 = sum();
sum2(10);

const num = 100;

function addition(num1, num2) {
  // when this function is returned, its closure will return along wth it
  // its closure will contain reference of the outer scope variables like num1 and num2
  return function (num3) {
    console.log(num + num1 + num2 + num3);
  };
}

// add1() and add2() will form a closure with both addition() and global scope

// closure of add1() will contain num1 = 10 amd num2 = 20
const add1 = addition(10, 20);
add1(5);

// closure of add2() will contain num1 = 20 amd num2 = 40
const add2 = addition(20, 40);
add2(10);
