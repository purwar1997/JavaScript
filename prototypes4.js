const object1 = {
  name: 'Shubham',
  age: 24,
  occupation: 'coder',

  userInfo: function () {
    return `${this.name}, ${this.age} years old ${this.occupation}`;
  },
};

const object2 = {
  city: 'Etawah',
  occupation: 'Engineer',
};

const object3 = {
  name: 'Akshay',
  state: 'Uttar Pradesh',
  country: 'India',
};

// Prototypal inheritance
// one object's prototype inheriting another object

// object2 can access all the properties of object1
object2.__proto__ = object1;

// object3 can access all the properties of object2 and object1
object3.__proto__ = object2;

// Prototype chain
console.log(object3.__proto__); // object2
console.log(object3.__proto__.__proto__); // object1
console.log(object3.__proto__.__proto__.__proto__); // Object.prototype
console.log(object3.__proto__.__proto__.__proto__.__proto__); // null

// hasOwnProperty() returns true for direct child properties and false for inherited properties
// hasOwnProperty() doesn't enter into prototype chain
console.log(object3.hasOwnProperty('city'));
console.log(object3.hasOwnProperty('userInfo'));

// 'in' operator enters into prototype chain
console.log('name' in object3);
console.log('city' in object3);
console.log('userInfo' in object3);

Function.prototype.print = function () {
  console.log('Inside prototype');
};

function fun() {}
fun.print();

Array.prototype.sum = function () {
  let sum = 0;
  for (let num of this) {
    sum = sum + num;
  }
  return sum;
};

console.log([12, 3, 4].sum());
console.log([10, 10, 4].sum());

Object.prototype.table = function () {
  console.table(this);
};

object1.table();
object3.table();
