function substr(string, start, length) {
  let index = (start >= 0) ? start : string.length + start;
  let characters = 0;
  sub = ''
  
  for (; index < string.length; index++) {
    if (characters >= length) break;
    sub += string[index];
    characters += 1;
  }
  return sub;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""