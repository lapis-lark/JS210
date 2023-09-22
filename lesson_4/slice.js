function push(arr, ele) {
  arr[arr.length] = ele;
  return arr;
}

function pop(arr) {
  if (arr.length === 0) return arr;
  last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

function unshift(arr, ele) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = ele;
  return arr.length;
}

function shift(arr) {
  if (arr.length === 0) return arr;
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return first;
}

function slice (arr, start, end) {
  let new_arr = [];
  for (let i = start; i <= end; i++) {
    push(new_arr, arr[i]);
  }
  return new_arr;
}

let x = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(slice(x, 3, 5));

function splice(arr, start, number) {
  let new_arr = [];

  for (let i = start; i < arr.length; i++) {
    if (i < start + number) {
      push(new_arr, arr[i]);
    } else {
      arr[i - number] = arr[i];
    }
  }
  arr.length = arr.length - new_arr.length;
  return new_arr;
}

// console.log(splice(x, 3, 3));
// console.log(x);
let y = ['a', 'b'];

function concat(arr1, arr2) {
  let combo = [];

  for (arr of [arr1, arr2]) {
    for (ele of arr) {
      push(combo, ele);
    }
  }

  return combo;
}

// console.log(concat(x, y));

function join(arr, str) {
  joined = '';
  for (let i = 0; i < arr.length - 1; i++) {
    joined += (arr[i] + str);
  }

  return joined + arr[arr.length - 1];
}

console.log(join(x, '%'));