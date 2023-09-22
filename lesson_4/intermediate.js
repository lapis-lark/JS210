function oddElementsOf(arr) {
  let new_arr = [];

  for (let i = 1; i < arr.length; i += 2) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

function sortDescending(arr) {
  let new_arr = [];
  arr.forEach(ele => new_arr.push(ele));
  return new_arr.sort((a, b) => a > b ? -1 : 1);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr_arr) {
  let new_arr = [];
  for (arr of arr_arr) {
    new_arr.push(arr.reduce((memo, ele) => memo += ele, 0));
  }

  return new_arr;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function uniqueElements(arr) {
  let new_arr = [];
  for (ele of arr) {
    if (new_arr.indexOf(ele) === -1) new_arr.push(ele);
  }

  return new_arr;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]