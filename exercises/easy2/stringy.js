function stringy(n) {
  let str = '1';
  for (let i = 0; i < n - 1; i++) {
    str += (str.slice(-1) === '1' ? '0' : '1');
  }
  return console.log(str);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"