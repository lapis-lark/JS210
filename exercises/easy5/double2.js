function doubleConsonants(str) {
  let str_arr = [];
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  [...str].forEach(c => {
    if (!VOWELS.includes(c)) {
      str_arr.push(c.repeat(2))
    } else {
      str_arr.push(c);
    }
  });
  return str_arr.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""