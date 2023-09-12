function sumOfSquares(arr) {
  return arr.reduce((memo, ele) => (memo + ele * ele), 0);
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83