// Date() is a constructor function which will be invoked and will return a date object
// 'now' variable is a date object

let now = new Date();

console.log(now.getDate());
// sunday = 0, monday = 1,  ... saturday = 6
console.log(now.getDay());
console.log(now.getFullYear());
// 24 hour format
console.log(now.getHours());
// january = 0, february = 1, ... december = 11
console.log(now.getMonth());
// getTime() returns the number of milliseconds passed since January 1, 1970 00:00:00.
console.log(now.getTime());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getUTCDate());

// returns complete information about date and time
console.log(now);
console.log(now.toString());
