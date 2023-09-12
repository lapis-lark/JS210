function oddLengths(arr) {
  arr.reduce((memo, ele) => { (ele.length % 2 == 1) ? memo.concat([ele.length]) : memo }, []);

}

function oddLengths(arr) {
  return arr.reduce(function (memo, ele) {
    (ele.length % 2 == 1) ? memo.concat([ele.length]) : memo
  }, [])
}

function oddLengths(arr) {
  return arr.reduce(function (memo, ele) {
    console.log(`${memo}`)
  }, 0)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]