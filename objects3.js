// object.assign() method
// Syntax: Object.assign(target, ...sources)

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let obj3 = { a: 0, b: 0, c: 0 };

let obj4 = Object.assign({ a: 10, c: 30 }, obj1, obj2);
console.log(obj4);

obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj4);

let user = Object.assign(
  { name: 'Vikas' },
  { age: 10, grade: 5 },
  { city: 'Noida' },
  { state: 'UP', country: 'India' }
);

console.log(user);

// Object.create() method
// Syntax: Object.create(proto, propObject)

let numbers = { x: 10, y: 20, z: 1 };

// numbers object will become prototype of obj5
let obj5 = Object.create(numbers, {
  a: { value: true },
  b: { value: false },
  c: { value: 'great' },
});

console.log(obj5.a, obj5.x, obj5.b, obj5.z);

// properties a, b, c will be outside the prototype
console.log(obj5.hasOwnProperty('a'));

// properties x, y, z will be inside the prototype
console.log(obj5.hasOwnProperty('x'));

const login = function () {
  return `${this.name} has logged in`;
};

const logout = function () {
  return `${this.name} has logged out`;
};

let obj6 = Object.create(obj5, {
  name: { value: 'Kapil' },
  login: { value: login },
  logout: { value: logout },
});

console.log(obj6.login(), obj6.a, obj6.x);

console.log(obj6.hasOwnProperty('login'));
console.log(obj6.hasOwnProperty('logout'));

// hasOwnProperty() method doesn't enter prototype chain
console.log(obj6.hasOwnProperty('b'));
console.log(obj6.hasOwnProperty('z'));

// creating objects using Object.create()
const User = function (name, gender, email) {
  const proto = {
    buyCourse: function (course) {
      this.courseList.push(course);
    },

    getCourseCount: function () {
      return this.courseList.length;
    },

    login: function () {
      this.loginCount = this.loginCount + 1;
      console.log(`${this.name} has logged in`);
    },
  };

  const obj = Object.create(proto, {
    name: { value: name },
    gender: { value: gender },
    email: { value: email },
    loginCount: { value: 0 },
    courseList: { value: [] },
    grade: { value: undefined },
  });

  return obj;
};

const user1 = new User('Tapas', 'male', 'tapas10@gmail.com');
const user2 = new User('Tejas', 'male', 'tejas@dev.com');
