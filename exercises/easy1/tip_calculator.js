var readlineSync = require('readline-sync');

let bill = +readlineSync.question('bill amount: ');
let tipPercent = +readlineSync.question('tip percent: ');

let tip = tipPercent * bill / 100;
let total = tip + bill;

console.log(`the tip is ${tip.toFixed(2)}`);
console.log(`total: ${total.toFixed(2)}`)