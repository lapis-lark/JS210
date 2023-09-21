var readLines = require('readline-sync');

const words = {noun: null, adjective: null, verb: null, adverb: null};

Object.keys(words).forEach(word => words[word] = readLines.question(`input a ${word}: `));

console.log(`Great ${words['noun']}!`)
console.log(`Give us thy ${words['adjective']} flame, and ${words['verb']} us ${words['adverb']}.`);
