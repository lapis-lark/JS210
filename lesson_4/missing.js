function missing(arr) {
  let new_arr = [];

  for (let i = arr[0] + 1; i < arr.slice(-1); i++) {
    if (arr.indexOf(i) === -1) new_arr.push(i);
  }

  return new_arr;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []