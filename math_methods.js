const PI = Math.PI;
console.log(PI);

console.log(Math.E);
console.log(Math.SQRT2); // root of 2
console.log(Math.SQRT1_2); // root of 1/2

// round() => returns a rounded integer value
console.log(Math.round(PI));
console.log(Math.round(67.822321108765));

// upto 4 digits
console.log(Math.round(PI * 10000) / 10000);

// floor() => returns greatest integer smaller than or equal to the value
// ceil() => returns smallest integer greater than equal to the value

console.log(Math.floor(PI));
console.log(Math.ceil(PI));

console.log(Math.floor(7.4));
console.log(Math.ceil(7.4));

console.log(Math.floor(6.0));
console.log(Math.ceil(6.0));

// min() and max()
console.log(Math.min(34, 9, 76, 12, 0, 6, -1));
console.log(Math.max(34, 9, 76, 12, 0, 6, -1, 1001));

// random()
// returns a random number between 0 and 1 ( 0 is inclusive and 1 is exclusive )
console.log(Math.random());
console.log(Math.random());

// between 1 and 10
// let num = Math.floor(Math.random() * 10 + 1);
let num = Math.ceil(Math.random() * 10);
console.log(num);

// between 1 and 6
let num2 = (Math.floor(Math.random() * 10) % 6) + 1;
console.log(num2);

// abs() => returns a positive value
console.log(Math.abs(-10));
console.log(Math.abs(19));
console.log(Math.abs(-909));
console.log(Math.abs(0));

// sqrt()
console.log(Math.sqrt(100));
console.log(Math.sqrt(10));
console.log(Math.sqrt(169));

// pow()
// Syntax: Math.pow(base, power)
console.log(Math.pow(12, 2));
console.log(Math.pow(13, 3));
console.log(Math.pow(6, 4));
console.log(Math.pow(20, 3));

// T-functions
// Syntax: Math.sin(angle), Math.cos(angle), ...
// angle should be in radians not degrees

console.log(Math.sin(Math.PI / 2));
console.log(Math.sin(Math.PI / 6));
console.log(Math.cos(0));
console.log(Math.cos(Math.PI / 3));
console.log(Math.tan(Math.PI / 3));
console.log(Math.tan(Math.PI / 4));
