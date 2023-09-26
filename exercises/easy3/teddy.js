var readLines = require('readline-sync');

let num_arr = [];
for (let i = 1; i <= 5; i++) {
  num_arr.push(readLines.question(`enter number ${i}: `));
}
let last_num = readLines.question('enter last number: ');

if (num_arr.indexOf(last_num) !== -1) {
  console.log(`${last_num} appears in ${num_arr}`);
} else {
  console.log(`${last_num} does not appear in [${num_arr}]`);
}