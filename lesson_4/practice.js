function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

function firstNOf(arr, count) {
  new_arr = [];
  for (let i = 0; i < count; i++) {
    new_arr.push(arr[i]);
  }

  return new_arr;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

function lastNOf(arr, count) {
  new_arr = [];
  
  for (let i = arr.length - count; i < arr.length; i++) {
    new_arr.push(arr[i]);
  }

  return new_arr;
}

lastNOf(digits, 3);    // returns [4, 8, 15]