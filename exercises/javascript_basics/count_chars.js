const readlineSync = require("readline-sync");

console.log("enter phrase");
let phrase = readlineSync.prompt();

console.log(`there are ${phrase.length} chars in "${phrase}"`);