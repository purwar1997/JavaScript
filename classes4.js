// import User from './classes3.js';

const User = require('./classes3.js');

const user1 = new User('Tapas', 'male', 'tapas10@gmail.com');
const user2 = new User('Mansi', 'female', 'mansi10@gmail.com');
const user3 = new User();

user1.login();
user1.login();
user1.login();

user2.login();

user1.buyCourse('React.js');
user1.buyCourse('Vue.js');
user2.buyCourse('Node.js');

console.log(user1.courseList);
console.log(user3);

user3.buyCourse('HTML');
user3.buyCourse('Tailwind CSS');
console.log(user3.getCourseCount());

// way to use setter and getter
user1.setGrade = 'A+';
console.log(user1.getGrade);

user2.setGrade = 'B-';
console.log(user2.getGrade);

// private members can't be accessed outside the class
console.log(user1.grade);
console.log(user2.courseList);
console.log(user3.loginCount);
