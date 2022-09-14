// program for user registration

let userName = "purwar1997";
let fullName = "Shubham Purwar";
const eMail = "shubham06@gmail.com";
let mobileNum = 9897887654;

// string concatenation
console.log("My name is " + fullName + " and my contact no. is " + mobileNum);

// string interpolation / template strings / template literals
console.log(`
    Username is ${userName}
    Email id is ${eMail}
`);

// program for calculating discount
let mrp = 1999;
let discountPrice = 999;

let discount = ((mrp - discountPrice) / mrp) * 100;
console.log(
  `This product has ${Math.round(discount * 100) / 100}% discount on it.`
);

let ab = 5;

// post increment operator
let ab1 = ab++;
console.log(ab, ab1);

// pre increment operator
let ab2 = ++ab;
console.log(ab, ab2);

// do not use ++, -- operator in production level code

// if-else
let rating = 2;

if (rating == 5) {
  console.log("Excellent");
} else if (rating == 4) {
  console.log("Good");
} else if (rating == 3) {
  console.log("Average");
} else if (rating == 2) {
  console.log("Bad");
} else if (rating == 1) {
  console.log("Very bad");
} else {
  console.log("User has't given any rating");
}

// switch case
let user = "teacher";

switch (user) {
  case "superadmin":
    console.log(`You are a superadmin`);
    break;

  case "admin":
    console.log(`You are an admin`);
    break;

  case "teacher":
    console.log(`You are a teacher`);
    break;

  case "student":
    console.log(`You are a student`);
    break;

  case "examinee":
    console.log("You just came here to attend test");
    break;

  default:
    console.log("You are not a registered user");
}
