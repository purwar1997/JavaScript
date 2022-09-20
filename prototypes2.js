const user1 = {
  name: 'Shubham',
  city: 'Etawah',
  state: 'Uttar Pradesh',
};

const user2 = {
  name: 'Hitesh',
};

user2.prototype = user1;

console.log(user2);
console.log(user2.prototype.city, user2.prototype.state);
