let x = [1, 2, 3];
console.log(x)

function push(arr, ele) {
  arr[arr.length] = ele;
  return arr;
}
console.log(push(x, 4))

function pop(arr) {
  if (arr.length === 0) return arr;
  last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

console.log(pop(x));
console.log(x);


function unshift(arr, ele) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = ele;
  return arr.length;
}

console.log(unshift(x, 0));
console.log(x);

function shift(arr) {
  if (arr.length === 0) return arr;
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return first;
}
console.log(shift(x));
console.log(x);
console.log(x);