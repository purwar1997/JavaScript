// In JS, functions are objects. So they can have their own properties and methods.
// call(), apply() and bind() are methods of functions

const user1 = {
  name: 'Shubham Purwar',
  course: 'BCA',
};

const user2 = {
  name: 'Akshay Saini',
  course: 'BTech',
};

function userInfo(age, college) {
  return `${this.name}, ${age} years old is currently pursuing ${this.course} from ${college}`;
}

// call() and apply() will directly invoke the function

// call() method
// Syntax: function.call(this_reference, arg1, arg2, ...)

// first argument must be a reference to 'this' variable
console.log(userInfo.call(user1, 24, 'IIT Delhi'));
console.log(userInfo.call(user2, 26, 'NIT Bhopal'));

// apply() method
// Syntax: function.apply(this_reference, arrayOfValues)

// first argument must be a reference to 'this' variable
console.log(userInfo.apply(user1, [24, 'IGNOU Delhi']));
console.log(userInfo.apply(user2, [26, 'BITS Pilani']));

// bind() method
// Syntax: function.bind(this_reference, arg1, arg2, ...)
// bind() doesn't invokes function. Instead, it returns a copy of the function that can be invoked later.

const student1 = {
  name: 'Shubham Purwar',
  grade: '12th',
  rollNo: 45,
};

const student2 = {
  name: 'Mansi Purwar',
  grade: '10th',
  rollNo: 41,
};

const student3 = {
  name: 'Anurag Pandey',
  grade: '11th',
  rollNo: 20,
};

function marks(mathsMarks, scienceMarks, englishMarks, hindiMarks) {
  this.maths = mathsMarks;
  this.science = scienceMarks;
  this.english = englishMarks;
  this.hindi = hindiMarks;
}

// stu1 and stu2 will contain a copy of the marks() function

// in stu1, 'this' will refer to student1 object
const stu1 = marks.bind(student1, 95, 90);
stu1(80, 75);

console.table(student1);

// in stu2, 'this' will refer to student2 object
const stu2 = marks.bind(student2);
stu2(70, 90, 60, 87);

console.table(student2);
