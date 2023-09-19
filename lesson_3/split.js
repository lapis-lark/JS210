function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: no delimiter');
    return;
  }

  let acc = '';

  for (c of string) {
    if (delimiter === c) {
      console.log(acc);
      acc = '';
    } else if (delimiter === '') {
      console.log(c);
    } else {
      acc += c;
    }
  }
  if (acc.length > 0) console.log(acc)
}




splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello