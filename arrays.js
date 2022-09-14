// Array literal
let arr = ['Hitesh', 'Aniruddh', 'Prasad', 'Surya'];
console.log(arr[0]);
console.log(arr[2]);

// length of an array
console.log(arr.length);

// to access last element
console.log(arr[arr.length - 1]);

arr[0] = 'Shubham';
arr[3] = 'Anurag';
console.log(arr);

// declaring array using constructor function
let arr2 = new Array('a', 'b', 'c', true, 100, false);
console.log(arr2);

// array methods

// push()
// to add elements
arr.push('Aman');
console.log(arr);

arr.push('Kapil');
console.log(arr);

arr[arr.length] = 'Omkar';
console.log(arr);

// slice()
// Syntax: array.slice(startIndex, endIndex)
// slice() doesn't modifies the original array

console.log(arr.slice(0, 2));
console.log(arr.slice(4));
console.log(arr.slice(2, 6));

// splice()
// Syntax: array.splice(startIndex, numberOfElements, replacingValues)
// splice() modifies the original array

let arr3 = ['aa', 'bb', 'cc', 'ab', 'cd', 'fe', 'op'];

// deleting a value
arr3.splice(2, 1);
console.log(arr3);

// replacing a value
arr3.splice(4, 1, 'ce');
console.log(arr3);

arr3.splice(3, 2, 'ac', 'ad');
console.log(arr3);

arr3.splice(2, 3, 'pop');
console.log(arr3);

// adding values
arr3.splice(2, 0, 'cc', 'dd', 'ee', 'ff');
console.log(arr3);

// concat()
// Syntax: array.concat(array1, array2, array3, ...)
let num1 = [1, 2, 3];
let num2 = [4, 5, 6, 7];

let num3 = num1.concat(num2);
console.log(num3);
console.log(num3.concat([true, false]));
console.log(num3.concat([true, false]).concat('JS'));

let num4 = num1.concat(num2, num3, [8, 9], [10]);
console.log(num4);

num4.splice(0, 7);
console.log(num4);

num4.splice(0, 0, 0);
num4.splice(10);
console.log(num4);

// copyWithin()
// modifies the original array

console.log(num4.copyWithin(2, 6, 9));
console.log(num4.copyWithin(0, 8));
console.log(num4.copyWithin(0, 9));
console.log(num4);

// includes()
num1 = num1.concat([4, 5, 6, 7, 8]);
console.log(num1);

// Syntax: array.includes(value)
// returns either true or false

console.log(num1.includes(4));
console.log(num1.includes(6));
console.log(num1.includes(10));

console.log(arr);
console.log(arr.includes('Hitesh'));
console.log(arr.includes('Omkar'));

// indexOf()
// returns index if the value is found
// returns -1 if the value is not found

console.log(arr);
console.log(arr.indexOf('Kapil'));
console.log(arr.indexOf('Shubham'));
console.log(arr.indexOf('Paras'));

// lastIndexOf() => index of last occurence

num1 = [1, 'LCO', 3, 4, 5, 'LCO', 9, 7, 'LCO', 5];

console.log(num1.indexOf('LCO'));
console.log(num1.lastIndexOf('LCO'));
console.log(num1.lastIndexOf(5));

// map()
// Syntax: array.map(function(value, index, array) { ...code... } )
// returns a new array

let squares = [121, 4, 16, 25, 49, 100, 625, 144];
let root = squares.map(value => Math.sqrt(value));
console.log(root);

// reverse() modifies the original array
console.log(root.reverse());
console.log(root);
console.log(squares.reverse());

let num5 = [12, 90, 7, 54, 1];

// pop() removes value from the end
console.log(num5.pop());
console.log(num5);

console.log(num5.pop());
console.log(num5);

// unshift() adds value at the start
num5.unshift(100);
console.log(num5);

num5.unshift(0);
console.log(num5);

// shift() removes value from the start
console.log(num5.shift());
console.log(num5.shift());
console.log(num5);

// sort() modifies the original array
console.log(arr);
console.log(arr.sort());

// join()
// converts an array into a string
// Syntax: array.join(joining_string)

console.log(arr.join(' and '));
console.log(arr.join(' -- '));

// both produce same results
console.log(arr.join(','));
console.log(arr.toString());

// split()
// converts a string into an array
// Syntax: string.split(divider_string)

let lang = 'javascript';
console.log(lang.split(''));

let numSum = '1+ 2+ 3+ 4+ 5+ 6+ 10+ 0';
console.log(numSum.split('+ '));
