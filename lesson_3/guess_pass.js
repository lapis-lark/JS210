var readlineSync = require('readline-sync');

function guessPass() {
  const PASSWORD = 'pass'
  for (let i = 0; i < 3; i++) { 
    let guess = readlineSync.question('what\'s the password? ');
    if (guess === PASSWORD) {
      console.log('you guessed right!');
      return;
    } else {
      console.log('try again!');
    }
  }
  console.log('eternal failure :(')
}

guessPass();