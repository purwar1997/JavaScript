// class declaration

class User {
  constructor(name = 'JS developer', gender = 'None', email = 'dev@gmail.com') {
    this.name = name;
    this.gender = gender;
    this.email = email;
  }

  // private members can be accessed inside the class but not outside the class
  // public members can be accessed inside as well as outside the class

  // by default, all variables and functions inside class are public members
  // to make them private, use #

  #grade = undefined;
  #loginCount = 0;
  #courseList = [];

  buyCourse(course) {
    this.#courseList.push(course);
  }

  getCourseCount() {
    return this.#courseList.length;
  }

  login() {
    this.#loginCount = this.#loginCount + 1;
    console.log(`${this.name} has logged in`);
  }

  // setter
  set setGrade(grade) {
    this.#grade = grade;
  }

  // getter
  get getGrade() {
    return this.#grade;
  }
}

// to export User class so that it can be used in another file
module.exports = User;
