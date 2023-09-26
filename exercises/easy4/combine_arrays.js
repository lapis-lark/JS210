function union(...arrs) {
  let newArr = [];
  arrs.forEach(arr => arr.forEach(ele => {
    if (!newArr.includes(ele)) newArr.push(ele);
  }))

  return newArr;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
