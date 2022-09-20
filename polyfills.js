const user = {
  name: 'Shubham Purwar',
  course: 'BCA',
};

function userInfo(age, college) {
  return `${this.name}, ${age} years old is currently pursuing ${this.course} from ${college}`;
}

// polyfill or call()
Function.prototype.myCall = function (object, ...args) {
  object.func = this;
  return object.func(...args);
};

console.log(userInfo.myCall(user, 24, 'VIT Bhopal'));

// polyfill for apply()
Function.prototype.myApply = function (object, args) {
  object.func = this;
  return object.func(...args);
};

console.log(userInfo.myApply(user, [21, 'BIT Mesra']));

const student = {
  name: 'Shubham Purwar',
  grade: '12th',
  rollNo: 45,
};

function marks(mathsMarks, scienceMarks, englishMarks, hindiMarks) {
  this.maths = mathsMarks;
  this.science = scienceMarks;
  this.englisg = englishMarks;
  this.hindi = hindiMarks;
}

// polyfill for bind()
Function.prototype.myBind = function (object, ...args) {
  object.func = this;
  return function (...args2) {
    return object.func(...args, ...args2);
  };
};

let stu = marks.myBind(student, 100);
stu(90, 80, 40);

console.table(student);

// polyfill for bind() using call() method
Function.prototype.myBind = function (object, ...args) {
  const func = this;
  return function (...args2) {
    return func.call(object, ...args, ...args2);
  };
};

stu = marks.myBind(student, 100, 90, 80);
stu(49);

console.table(student);

// polyfill for bind() using apply() method
Function.prototype.myBind = function (object, ...args) {
  const func = this;
  return function (...args2) {
    return func.apply(object, [...args, ...args2]);
  };
};

stu = marks.myBind(student, 100);
stu(49, 90, 80);

console.table(student);
