// -------- SETS -------- //

// set is a collection of unique elements
// no element is repeated inside a set

let set = new Set([90, 9, true, 'html', 'css', 90, true]);
console.log(set);

// values inside set are not indexed
// hence values inside set can't be accessed using []
console.log(set[1]);

console.log(set.size);

// add()
set.add(false);
set.add('JS');
set.add(-10);
console.log(set, set.size);

// delete()
set.delete(9);
console.log(set);

set.delete(-10);
set.delete(90);
console.log(set);

// has() returns either true or false
console.log(set.has('html'));
console.log(set.has(true));
console.log(set.has(90));

// clear() deletes all the values of set
set.clear();
console.log(set, set.size);

set = new Set([true, 'html', 'css', 'python', false]);

// in a set, keys and values are same
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

// set is an iterable
// so we can loop over it to access values
for (let value of set) {
  console.log(value);
}

// Syntax: set.forEach(function(value, key, set) {  ...code...  })
// in a set, keys and values are same
set.forEach(value => console.log(value));

// converting set into an array with the same values
set = [...set];
console.log(set);

// -------- MAPS -------- //

// map is a collection of key-value pairs
// where keys and values can be of any datatype

// in objects, values can be of any datatype but keys are always string

// maps are iterables, objects are not

let map = new Map(); // an empty map is created
console.log(map);

// size property returns no. of properties inside map
console.log(map.size);

// set() is used to add properties
// Syntax: map.set(key, value)
// set() returns an updated map, hence set() methods can be chained

map.set('name', 'Jonathan');
console.log(map);

map
  .set('age', 21)
  .set('city', 'San Jose')
  .set('inCollege', true)
  .set('hasAJob', false)
  .set('parents', { mother: 'Martha', father: 'Jordan' });

console.log(map);

// get() is used to access values of a map
// Syntax: map.get(key)

console.log(map.get('name'));
console.log(map.get('city'));
console.log(map.get('parents'));
console.log(map.get('college')); // undefinded

// delete() is used to delete a specific property of map
// Syntax: map.delete(key)
map.delete('hasAJob');
console.log(map);

map.delete('inCollege');
console.log(map);

// to delete all properies of a map
map.clear();
console.log(map);

map
  .set('name', 'Jonathan')
  .set('age', 21)
  .set('city', 'San Jose')
  .set('inCollege', true)
  .set('hasAJob', false)
  .set('parents', { mother: 'Martha', father: 'Jordan' });

// has()
// to check whether map contains a specific property or not
// Syntax: map.has(key)
console.log(map.has('age')); // true
console.log(map.has('city')); // true
console.log(map.has('email')); // false

console.log(map.keys()); // all keys
console.log(map.values()); // all values
console.log(map.entries()); // all properties

console.log(map.size);

// forEach()
// Syntax: map.forEach(function(value, key, map) {   ...code...  })
map.forEach((value, key) => console.log(`${key}:`, value));

// map is an iterable, so we can loop over it to access keys and values

for (let property of map) {
  // property will be an array i.e. [key, value]
  console.log(property);
}

for (let [key, value] of map) {
  console.log(key, value);
}

// => is called a FAT arrow

// spread operator on map
let map2 = new Map();
map2.set('email', 'jonathan@outlook.in').set('country', 'USA');
console.log(...map2);

let map3 = new Map();
map3.set('college', 'MIT').set('contactNo.', '9897675451');
console.log(...map3);

// to merge multiple maps into one
map = new Map([...map, ...map2, ...map3]);
console.log(map, map.size);
