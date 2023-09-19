function repeat(string, times) {
  if ((times < 0) || !Number.isInteger(times)) return undefined;

  let newStr = '';
  for (let i = 0; i < times; i++) {
    newStr += string;
  }
  return newStr;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined