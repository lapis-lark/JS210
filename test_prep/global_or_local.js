function logNums() {
  console.log(a);
  console.log(b);
}

let a = '5';
var b = '6';

logNums();

if (true) {
  let x = '1';
  var y = '2';
}

// console.log(x); // x has block scope, 
console.log(y); // y has function scope, so this