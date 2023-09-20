var readlineSync = require('readline-sync');

let length = readlineSync.question('how long is the room? ');
let width = readlineSync.question('how wide is the room? ');

area_meters = (length * width)
area_feet = area_meters * 10.7639

console.log(`the room is ${area_meters.toFixed(2)} square meters`);
console.log(`and ${area_feet.toFixed(2)} square feet`);