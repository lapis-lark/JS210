function isUppercase(text) {
  for (char of text) {
    if (char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
}





isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


