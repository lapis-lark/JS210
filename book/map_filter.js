function oddLengths(arr) {
  return arr.map(ele => ele.length).filter(ele => ele % 2 === 1);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]