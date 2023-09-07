let rlSync = require('readline-sync');

function multiply(a, b) {
  return a * b
}

function showMultiply() {
  let first = Number(rlSync.question('enter the first number: '));
  let second = Number(rlSync.question('enter the second number: '));
  console.log(`${first} * ${second} = ${multiply(first, second)}`)
}

showMultiply();