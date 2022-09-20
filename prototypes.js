// creating objects without using classes

// User() will act as a constructor
function User(name, age, email, password) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.password = password;

  this.info = function () {
    return `${this.name} is ${this.age} years old`;
  };
}

// these methods will be inside prototype property of User objects
User.prototype.signup = function () {
  this.isEnrolled = true;
  this.loginCount = 0;
  return `${this.name} has signed up`;
};

User.prototype.login = function () {
  this.loginCount = this.loginCount + 1;
  return `${this.name} has logged in`;
};

User.prototype.logout = function () {
  return `${this.name} has logged out`;
};

// creating instances of User
const user1 = new User('Paras Chopra', 40, 'paras20@gmail.com', 'pass123');
const user2 = new User('Aman Sinha', 46, 'aman20@gmail.com', 'pass000');
const user3 = new User('Anurag Tiwari', 25, 'tiwariji@gmail.com', 'pass5050');

// inheritance using prototype

function Admin(company, role, ...args) {
  this.company = company;
  this.role = role;
  // using call() method
  User.call(this, ...args);
  // using apply() method
  // User.apply(this, args);

  this.displayBio = function () {
    return `I am ${this.name} and I work at ${this.company} as a ${this.role}`;
  };
}

// inheritance of User class methods
// prototype of Admin class will inherit the prototype of User class
Admin.prototype = Object.create(User.prototype);

// Admin class methods
Admin.prototype.addUser = function (user) {
  userList.push(user);
  return userList;
};

Admin.prototype.deleteUser = function (user) {
  userList = userList.filter(u => u.email !== user.email);
  return userList;
};

// creating instances of Admin
const admin1 = new Admin(
  'iNeuon',
  'Instructor',
  'Shubham Purwar',
  24,
  'shubhampurwar@gmail.com',
  'cool123'
);

const admin2 = new Admin(
  'LCO',
  'Instructor',
  'Hitesh Choudhary',
  30,
  'hitesh30@gmail.com',
  'hot123'
);

// let userList = [];

// console.log(admin1.addUser(user1));
// console.log(admin1.addUser(user2));
// console.log(admin2.addUser(user3));

// console.log(admin2.deleteUser(user2));
// console.log(admin2.deleteUser(user3));

// SuperAdmin constructor
function SuperAdmin(course, college, ...args) {
  this.course = course;
  this.college = college;
  Admin.call(this, ...args);
  //   Admin.apply(this, args);
}

// prototypal inheritance
// prototype of SuperAdmin class will inherit the prototype of Admin class
SuperAdmin.prototype = Object.create(Admin.prototype);

// SuperAdmin methods
SuperAdmin.prototype.changeAdminRole = function (admin, newRole) {
  admin.role = newRole;
  return `${admin.name} has been given a new role of ${admin.role}`;
};

SuperAdmin.prototype.expelUsers = function (user) {
  user.isEnrolled = false;
  return `${user.name} has been expelled from the course`;
};

// instance of SuperAdmin
const superAdmin = new SuperAdmin(
  'Btech',
  'IIT Delhi',
  'iNeuron',
  'CEO',
  'Neha Gupta',
  24,
  'nehagupta25@gmail.com',
  'coolgirl12'
);

console.log(superAdmin.changeAdminRole(admin1, 'CTO'));
console.log(superAdmin.changeAdminRole(admin2, 'Product Manager'));

console.log(superAdmin.expelUsers(user1));
console.log(superAdmin.expelUsers(user2));
