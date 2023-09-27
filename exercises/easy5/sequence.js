function sequence(oddNum) {
  let arr = [];
  for (let i = 1; i <= oddNum; i += 2) {
    arr.push(i);
  }
  return arr;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]