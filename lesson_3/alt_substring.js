function substring(string, start, end) {
  if (!(Number.isInteger(start)) || start < 0) start = 0;
  if (!(Number.isInteger(end)) || end < 0) end = string.length;

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let sub = '';

  for (let n = start; (n < string.length && n < end); n++) {
    sub += string[n];
  }
  console.log(sub);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
