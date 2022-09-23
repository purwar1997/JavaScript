class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // private member
  #courseList = [];

  // static keyword is used create static properties and static methods
  // static properties
  static isEnrolled = true;

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(course) {
    this.#courseList.push(course);
  }

  getCourseCount() {
    return this.#courseList.length;
  }

  // static method
  static refund() {
    return `Your money has been refunded`;
  }
}

const user = new User('Naval', 'naval@outlook.com');

// these static members can only be accessed by class itself and not by instances of that class
console.log(User.isEnrolled);
console.log(User.refund());

// console.log(user.isEnrolled);
// console.log(user.refund());

// inheritance
class Admin extends User {
  constructor(name, email) {
    // calls parent class constructor
    super(name, email);
  }

  static role = 'instructor';

  // will override getInfo() of User class
  getInfo() {
    return `${this.name} is an admin`;
  }

  // accessing static properties and static methods of parent class
  refundMoney() {
    return `${this.name}, ${User.refund()}`;
  }

  static isEnrolled() {
    return `Enrolled: ${super.isEnrolled}`;
  }
}

const admin = new Admin('Elon', 'elonmusk@gmail.com');
console.log(admin.getInfo());

console.log(admin.role);
console.log(Admin.role);
console.log(Admin.isEnrolled());
console.log(admin.refundMoney());
