let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let printEven = (arr) => { arr.forEach(ele => { if (ele % 2 == 0) console.log(ele) })  };

myArray.forEach(arr => printEven(arr));
