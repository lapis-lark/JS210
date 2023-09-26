var readLines = require('readline-sync');

let age = +readLines.question("what's your age? ");
let retireAge = +readLines.question('what age will you retire?');

currentYear = (new Date()).getFullYear();

console.log(`it's ${currentYear}. you will retire in ${retireAge - age + currentYear}`);
console.log(`only ${retireAge - age} years left :p`)