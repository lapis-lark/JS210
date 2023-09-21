var readlineSync = require('readline-sync');

let limit = +readlineSync.question('enter a number greater than 0: ')
let operation = readlineSync.question('enter "s" for the sum or "p" for the product: ')

range = generateRange(limit);
switch (operation) {
  case 's':
    console.log(range.reduce((memo, n) => memo += n, 0));
    break;
  case 'p':
    console.log(range.reduce((memo, n) => memo *= n, 1));
}

function generateRange(limit) {
  arr = []
  for (let i = 1; i <= limit; i++) {
    arr.push(i);
  }
  return arr;
}