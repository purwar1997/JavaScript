// an object is a collecion of key-value pairs
let user = {
  firstName: 'Shubham',
  lastName: 'Purwar',
  degree: 'BCA',
  loginCount: 25,
  courseList: [],

  // "this" keyword refers to the current object i.e. user
  getCourse: function (course) {
    this.courseList.push(course);
  },

  courseCount: function () {
    return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
  },
};

console.log(user);
console.table(user);

// keys are used to access values of an object
// . => dot notation accepts full property names
// [] => bracket notation accepts variables and expressions

console.log(user.firstName);
console.log(user.degree);
console.log(user['lastName']);

let key = 'loginCount';
console.log(user[key]);

// updating values of an object
user.loginCount = 30;
user.degree = 'Btech';

console.table(user);

// adding new properties to an object
user.age = 24;
user.role = 'Student';
user.isRegistered = true;

console.table(user);

user.getCourse('Full Stack');
console.log(user.courseList);

user.getCourse('Blockchain');
user.getCourse('DSA');

console.log(user.courseList);

console.log(user.courseCount());

// keys
console.log(Object.keys(user));

// values
console.log(Object.values(user));

// both keys and values
console.log(Object.entries(user));

// hasOwnProperty() method
// Syntax: object.hasOwnProperty(key)
console.log(user.hasOwnProperty('firstName'));
console.log(user.hasOwnProperty('degree'));
console.log(user.hasOwnProperty('email'));

// ?. => optional chaining operator
// used to check whether an object has a specifc key or not
// returns the value if the key is present
// returns undefined if the key is not present

console.log(user?.firstName);
console.log(user?.age);
console.log(user?.email);
console.log(user?.contactNo);

// for-in loop
// used to loop over objects to return keys
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// for-of => array (return values)
// for-in => object (return keys)

// another way to access both keys and values of an object
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
