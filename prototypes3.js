var User = function (name, courseCount) {
  this.name = name;
  this.courseCount = courseCount;

  this.getCourseCount = function () {
    return `${this.name} is enrolled in ${this.courseCount} courses`;
  };
};

// adding methods inside prototype of User function
User.prototype.getName = function () {
  return `Username is ${this.name}`;
};

User.prototype.setEmail = function (emailId) {
  this.email = emailId;
};

var Userone = new User('Shubham', 3);
var Usertwo = new User('Paras', 5);

console.log(Userone.getCourseCount());

if (Usertwo.hasOwnProperty('name')) {
  console.log(Usertwo.getName());
}

if (User.prototype.hasOwnProperty('setEmail')) {
  Userone.setEmail('shubham@hotmail.com');
  Usertwo.setEmail('paras07@gmail.com');
}

console.table(Userone);
console.table(Usertwo);

// Accessing prototype of objects
console.log(Object.getPrototypeOf(Userone));
console.log(Usertwo.__proto__);

// instanceof operator
console.log(Userone instanceof User);
console.log(Usertwo instanceof User);

// hasOwnProperty()
// is used to check whether an object has a certain property or not
// returns false if the property is inherited one

console.log(Userone.hasOwnProperty('email'));
console.log(Usertwo.hasOwnProperty('getCourseCount'));

// hasOwnProperty() doesn't enter prototype chain to look for properties
console.log(Userone.hasOwnProperty('getName'));
console.log(Usertwo.hasOwnProperty('setEmail'));

// since arrays are also objects, hasOwnProperty() also works on them
const arr = new Array(1, 99, 100, 20);
console.log(arr.hasOwnProperty(0));
console.log(arr.hasOwnProperty('length'));
console.log(arr.hasOwnProperty(5));
