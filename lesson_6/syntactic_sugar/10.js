function makeObject(...strings) {
  let first = strings.shift();
  let last = strings.pop();

  return {
    first,
    last,
    middle: strings.sort(),
  }
}
let arr = ['hi', 'hey,', 'heloo', 'ahh', 'osssu']
let { first, last, middle } = makeObject(...arr);
console.log(first);
console.log(middle);
console.log(last);