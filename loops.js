// for loop

// Syntax: for(initialization, condition, increment/decrement) {
//     ...code...
// }

for (let i = 1; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// nested loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}  j = ${j}`);
  }
  console.log('---');
}

let countries = ['India', 'Iceland', 'America', 'Japan'];
let newCountries = [];

for (let i = 0; i < countries.length; i++) {
  //   newCountries[i] = countries[i].toUpperCase();
  newCountries.push(countries[i].toUpperCase());
}

console.log(newCountries);

// square of numbers
let numbers = [22, 8, 15, 21, 28];
let squares = [];

for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] ** 2);
}

console.log(squares);

// while loop
let i = 0;

while (i <= 5) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// while and for loops: first check condition then run the loop
// do-while loop: first run the loop then check condition

// loop will run at least once even if the condition is wrong
let j = 6;

do {
  console.log(j);
  j++;
} while (j < 5);

// for-of loop for arrays
numbers = [12, 8, 90, 76, 45];

for (let number of numbers) {
  console.log(number);
}

countries = ['India', 'Iceland', 'America', 'Japan'];
newCountries = [];

for (let country of countries) {
  newCountries.push(country.toUpperCase());
}

console.log(newCountries);

// break => used to exit loop
// continue => used to skip loop

for (let i = 0; i < 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
