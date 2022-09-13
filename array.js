// Array literal
let arr = ["Hitesh", "Aniruddh", "Prasad", "Surya"];
console.log(arr[0]);
console.log(arr[2]);

// length of an array
console.log(arr.length);

// to access last element
console.log(arr[arr.length - 1]);

arr[0] = "Shubham";
arr[3] = "Anurag";
console.log(arr);

// declaring array using constructor function
let arr2 = new Array("a", "b", "c", true, 100, false);
console.log(arr2);

// array methods

// push()
// to add elements
arr.push("Aman");
console.log(arr);

arr.push("Kapil");
console.log(arr);

arr[arr.length] = "Omkar";
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

let arr3 = ["aa", "bb", "cc", "ab", "cd", "fe", "op"];

// deleting a value
arr3.splice(2, 1);
console.log(arr3);

// replacing a value
arr3.splice(4, 1, "ce");
console.log(arr3);

arr3.splice(3, 2, "ac", "ad");
console.log(arr3);

arr3.splice(2, 3, "pop");
console.log(arr3);

// adding values
arr3.splice(2, 0, "cc", "dd", "ee", "ff");
console.log(arr3);

// concat()
// Syntax: array.concat(array1, array2, array3, ...)
let num1 = [1, 2, 3];
let num2 = [4, 5, 6, 7];

let num3 = num1.concat(num2);
console.log(num3);
console.log(num3.concat([true, false]));
console.log(num3.concat([true, false]).concat("JS"));

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
