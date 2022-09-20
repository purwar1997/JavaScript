// Classes serve as a template or blueprint to create multiple objects that have same properties and methods
// A class is a special function
// Hoisting is not allowed for classes i.e. first class has to be declared, then only objects can be created

// Classes can be declared using two ways :-
// 1. Class declaration
// 2. Class expression

// class declaration

class Student {
  // only one contructor function is allowed inside class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const student1 = new Student('Shubham', 24);
const student2 = new Student('Suyash', 20);

console.log(student1, student2);

// class expression

// unnamed/anonymous class expression
let rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

const rect = new rectangle(12, 4);
console.log(rect.height, rect.width);

// named class expression
// class name 'Rect' can only be accessed inside that class
rectangle = class Rect {
  constructor(height, width) {
    this.width = width;
    this.height = height;

    this.area = function () {
      const area = this.height * this.width;
      return area;
    };
  }
};

const rect1 = new rectangle(12, 5);
const rect2 = new rectangle(15, 8);

console.log(rect1);
console.log(rect1.area());
console.log(rect2, rect2.area());

// Example
class User {
  // constructor is used to create objects
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    // method inside constructor
    this.info = function () {
      return `${this.name} is ${this.age} years old`;
    };
  }

  // methods outside constructor function are inside __proto__ property of an object
  signup() {
    this.isEnrolled = true;
    this.loginCount = 0;
    console.log(`${this.name} has now enrolled in our course`);
    return this;
  }

  login() {
    this.loginCount = this.loginCount + 1;
    console.log(`${this.name} has logged in`);
    return this;
  }

  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
}

// new keyword
// 1. creates an empty object
// 2. sets the value of 'this' keyword inside class to that empty object
// 3. calls constructor function to create an object

// creating instances of User class
const user1 = new User('Shubham', 24, 'purwar98@ai.com');
const user2 = new User('Kapil', 22, 'kapil@gmail.com');
const user3 = new User('Hritik', 40, 'roshan20@gmail.com');

console.log(user1, user2);
console.log(user1.age);
console.log(user2.email);

console.log(user2.info());

// console.log(user1.signup());
// console.log(user2.signup());

// console.log(user1.login());
// console.log(user1.logout());
// console.log(user1.login());
// console.log(user2.login());

// method chaining is possible because these methods are returning objects
console.log(user1.signup().login().logout());
console.log(user2.signup().login());

// class inheritance

// User => Super class, Parent class, Base class
// Admin => Child class, Sub class, Derived class, Inherited class

// Admin class will inherit all the properties and methods of User class
class Admin extends User {
  constructor(name, age, email, role, company) {
    // super is used to call constructor function of super/parent class i.e. User
    super(name, age, email);
    this.role = role;
    this.company = company;

    this.displayBio = function () {
      return `I am ${this.name} and I work at ${this.company} as a ${this.role}`;
    };
  }

  addUser(user) {
    userList.push(user);
    return userList;
  }

  deleteUser(user) {
    const index = userList.indexOf(user);
    userList.splice(index, 1);
    return userList;
  }
}

const userList = [];

const admin1 = new Admin(
  'Hitesh',
  30,
  'hitesh20@gmail.com',
  'teacher',
  'iNeuron'
);

const admin2 = new Admin(
  'Anurag',
  28,
  'anurag_tiwari@gmail.com',
  'teacher',
  'LCO'
);

console.log(admin1, admin2);
console.log(admin1.displayBio());
console.log(admin2.displayBio());

console.log(admin1.addUser(user1));
console.log(admin2.addUser(user2));
console.log(admin1.addUser(user3));

console.log(admin2.deleteUser(user2));
console.log(admin1.deleteUser(user1));

class Superadmin extends Admin {
  constructor(name, age, email, role, company, contactNo) {
    super(name, age, email, role, company);
    this.contactNo = contactNo;
  }

  changeAdminRole(admin, newRole) {
    admin.role = newRole;
    return `Congratulations ${admin.name}, you are now a ${admin.role} of ${admin.company}`;
  }
}

const superAdmin = new Superadmin(
  'Paras',
  50,
  'parasgoyal@gmail.com',
  'CEO',
  'iNeuron',
  '9897887871'
);

console.log(superAdmin.changeAdminRole(admin1, 'CTO'));
console.log(superAdmin.changeAdminRole(admin2, 'Senior Developer'));

// objects will be instances of their parent classes
console.log(admin1 instanceof User);
console.log(admin2 instanceof User);
console.log(superAdmin instanceof Admin);
console.log(superAdmin instanceof User);
