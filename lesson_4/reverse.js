let x = [1, 2, 3];

function reverse(arr) {
  let new_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

console.log(reverse(x));