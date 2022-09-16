// Number() method
let num = '23';
console.log(num, typeof num);

let num1 = Number(num);
console.log(num1, typeof num1);

// NaN also has a datatype of number
let num2 = Number('100JAS');
console.log(num2, typeof num2);

// true => 1, false => 0
let num3 = Number(true);
console.log(num3);

let num4 = Number(false);
console.log(num4);

// undefined => NaN
let num5 = Number(undefined);
console.log(num5, typeof num5);

// null => 0
let num6 = Number(null);
console.log(num6, typeof num6);

// String() method
let str = String(100);
console.log(str, typeof str);

let str1 = String(NaN);
console.log(str1, typeof str1);

let str2 = String(true);
console.log(str2, typeof str2);

let str3 = String(null);
console.log(str3, typeof str3);

let str4 = String(undefined);
console.log(str4, typeof str4);

console.log(String([90, 98, 'shubham']));
console.log(String({ a: 12, b: 20, c: 0 }));

// Boolean() method
// 0, '', NaN, null, undefined => false
let bool = Boolean(0);
console.log(bool, typeof bool);

console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// numbers except 0, non-empty strings => true
console.log(Boolean('Java'));
console.log(Boolean(-1098));
console.log(Boolean(0.01));
console.log(Boolean(-0.003));
console.log(Boolean(' ')); // space character
console.log(Boolean('   ')); // tab character
console.log(Boolean('false'));
console.log(Boolean('null'));
console.log(Boolean('NaN'));
console.log(Boolean('undefined'));
console.log(Boolean('0'));
