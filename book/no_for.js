let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree (arr) {
  return (arr.filter(n => n === 3)).length > 0;
}

console.log(hasThree(numbers1));
console.log(hasThree(numbers2));
console.log(hasThree(numbers3));