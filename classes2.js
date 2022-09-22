class User {
  // setting default values
  constructor(
    firstName = 'Javascript',
    lastName = 'web developer',
    email = 'JSDev@gmail.com',
    password = 'goodJS'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.score = 0;
    this.age = undefined;
  }

  // class method
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }

  // getter => used to get or read values
  get getFirstName() {
    return this.firstName;
  }

  get getLastname() {
    return this.lastName;
  }

  // setter => used to set or write values
  // exactly one parameter is allowed inside set method
  set setScore(score) {
    this.score = score;
  }

  set setAge(age) {
    this.age = age;
  }

  get getScore() {
    return this.score;
  }
}

const user1 = new User('Rohit', 'Sharma', 'rohit10@gmail.com', 'js2020');
const user2 = new User('Mayank', 'Rajput', 'coolboy@gmail.com', 'dev20134');
const user3 = new User('Shubham', 'Purwar');
const user4 = new User();

console.log(user1, user2);
console.log(user2.getFullName());

console.log(user3);
console.log(user3.getFullName());
console.log(user4);
console.log(user4.email, user4.password);

// instanceof operator
console.log(user1 instanceof User);
console.log(user2 instanceof User);

// getters
console.log(user1.getFirstName);
console.log(user2.getLastname);
console.log(user3.getFirstName);

// setters
user1.setScore = 100;
user2.setScore = 200;
user4.setScore = 500;

console.log(user1.getScore, user2.getScore, user4.getScore);

user1.setAge = 30;
user2.setAge = 28;
user3.setAge = 24;

console.table(user1);

// another example
class Userone {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
  }

  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

class Usertwo extends Userone {
  constructor(firstName, lastName) {
    super(firstName, lastName); // calls parent class constructor
  }

  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

const user = new Usertwo('Shubham', 'Purwar');
