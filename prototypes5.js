const myHeroes = ['Thor', 'Ironman'];

const heroPowers = {
  thor: 'hammer',
  ironman: 'suit',
};

// Note: The base level protoype is always 'Object.prototype' which gets inherited by every other object
// like array, set, map, functions, date, promise etc.

// adding a property to all objects
Object.prototype.hitesh = function () {
  return 'Hitesh is present in all objects';
};

console.log(heroPowers.hitesh());
console.log(myHeroes.hitesh()); // an array is also an object

Array.prototype.heyArray = function () {
  return `Total elements are ${this.length}`;
};

console.log(myHeroes.heyArray());

// this method will be accessible on all arrays
// myHeroes.__proto__.heyArray = function () {
//   return `Total elements are ${this.length}`;
// };

// overriding inbuilt prototype methods of array
Array.prototype.push = function (value) {
  this[this.length] = value;
  return `Updated array: [${this}]\nNew length: ${this.length}`;
};

const dcHeroes = ['Batman'];
console.log(dcHeroes.push('Superman'));

// overriding inbuilt prototype methods of an object
Object.prototype.hasOwnProperty = function (prop) {
  return prop in this ? true : false;
};

// will enter the prototype chain
console.log(heroPowers.hasOwnProperty('valueOf'));
console.log(heroPowers.hasOwnProperty('toString'));

// prototypal inheritance
let User = {
  name: 'developer name',
  email: 'dev2022@gmail.com',
};

let Teacher = {
  makeVideos: true,
};

let TeachingSupport = {
  isAvailable: false,
};

// using __proto__ property
// Teacher.__proto__ = User;
// console.log(Teacher.name);

// using Object.assign() method
// Teacher = Object.assign(Teacher, User);

// using Object.create() method
// Teacher = Object.create(User, { makeVideos: { value: true } });

// using setPrototypeOf()
Object.setPrototypeOf(Teacher, User);
Object.setPrototypeOf(TeachingSupport, Teacher);

// old way to inherit prototype
let TSAssistant = {
  makeAssignments: 'JavaScript',
  fullTime: true,
  __proto__: TeachingSupport,
};

// trueLength()
String.prototype.trueLength = function () {
  for (let i = this.length - 1; i >= 0; i = i - 1) {
    if (this[i] !== ' ') {
      return i + 1;
    }
  }
  return 0;
};

// String.prototype.trueLength = function () {
//   return this.trim().length;
// };

console.log('hitesh       '.trueLength());
console.log('   '.trueLength());
