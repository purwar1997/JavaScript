const user1 = {
  name: 'Shubham',
  city: 'Etawah',
  state: 'Uttar Pradesh',

  getUserInfo: function () {
    console.log(`${this.name} is from ${this.city}, ${this.state}`);
  },
};

const user2 = {
  name: 'Hitesh',
};

const user3 = { city: 'Bangalore', state: 'Karnataka' };

// Prototypal inheritance: One object's prototype inheriting another object
// because of prototypal inheritance, user2 can access all the properties of user1
// and user3 can access all the properties of user2 and user1
user2.__proto__ = user1;
user3.__proto__ = user2;

console.log(user2);
console.log(user2.city, user2.state);
console.log(user3.name, user3.city);

// for constructors like Array, Map, Set, String and Function, use 'prototype' keyword to add methods
// Array.prototype.myMap = function() {  ...code...  }
// Function.prototype.myCall = function() {  ...code...  }

// for objects that are arrays, maps, sets and functions, use __proto__ to add methods
// user1.__proto__

Object.prototype.properties = function () {
  console.table(this);
};

user1.properties();
user2.properties();
user3.properties();

// accessing prototype of an object
let proto = user3;

while (proto) {
  // proto = proto.__proto__;
  proto = Object.getPrototypeOf(proto);
  console.log(proto);
}

// prototype chain
console.log(user3.__proto__); // user2
console.log(user3.__proto__.__proto__); // user1
console.log(user3.__proto__.__proto__.__proto__); // basic object prototpe
console.log(user3.__proto__.__proto__.__proto__.__proto__); // null
