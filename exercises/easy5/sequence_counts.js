function sequence(count, start) {
  let arr = [];
  let current = start;
  for (let i = 0; i < count; i++) {
    arr.push(current);
    current += start;
  }

  return arr;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

