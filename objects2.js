// new keyword will invoke constructor function to create an object
// person will be an empty object
// person = {};

let person = new Object();

// adding properties to an object
person.name = 'Shubham';
person.courseCount = 5;

// adding method
person.displayInfo = function () {
  return `${this.name} has purchased ${this.courseCount} courses`;
};

console.log(person);
console.log(person.displayInfo());

// creating custom constructor function
function User(name, email) {
  this.name = name;
  this.email = email;
  this.courseList = [];
}

User.prototype.courseCount = function () {
  return `${this.courseList.length}`;
};

User.prototype.buyCourse = function (course) {
  this.courseList.push(course);
};

// new keyword
// 1. creates an empty object
// 2. sets this keyword to that empty object
// 3. calls constructor function and passes arguments

let user1 = new User('Shubham', 'shubham@05gmail.com');
let user2 = new User('Paras', 'paras@25gmail.com');
let user3 = new User('Kapil', 'kapil@ai.com');

console.log(user1, user2, user3);
console.log(user1.email);
console.log(user2.courseCount);
console.log(user3.name);

user1.buyCourse('React.js');
user1.buyCourse('Full Stack');
console.log(user1.courseCount());

user2.buyCourse('Vue.js');
user2.buyCourse('Data Science');
console.log(user2.courseCount());

console.table(user1);
console.table(user2);
console.table(user3);
