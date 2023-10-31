function logNums() {
  console.log(a);
  console.log(b);
}

let a = '5';
var b = '6';

logNums(); // both a and b are global vars and accessible

if (true) {
  let x = '1';
  var y = '2';
}

// console.log(x); // x has block scope, 
console.log(y); // y has function scope, so this