let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let printEven = (ele) => {if  (ele % 2 == 0) console.log(ele)};

myArray.forEach(ele => printEven(ele));

myArray.forEach(let printTest = (ele) => { if  (ele % 2 == 0) console.log(ele) });
