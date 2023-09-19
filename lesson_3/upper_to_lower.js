let toLowerCase = str => {
  let arr = [];
  for (c of str) {
    charCode = c.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90 ) {
      arr.push(String(String.fromCharCode(charCode + 32))); // better to avoid magic numbers in future
    } else {
      arr.push(c);
    }
  }
  return arr.join('');
}


console.log(toLowerCase('45*&^JDKS'))
console.log(toLowerCase('ALP45PHA'))
console.log(toLowerCase('ALPHABET'))