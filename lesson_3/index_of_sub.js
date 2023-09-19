function indexOf(firstStr, secondStr) {
  let subStr = '';
  for (let i = 0; i < firstStr.length - secondStr.length + 1; i++) {
    subStr = firstStr.slice(i, i + secondStr.length);
    if (subStr === secondStr) return i;
  }
  return -1;
}

function lastIndexOf(firstStr, secondStr) {
  let subStr = '';
  for (let i = firstStr.length - secondStr.length; i > -1; i--) {
    subStr = firstStr.slice(i, i + secondStr.length);
    if (subStr === secondStr) return i;
  }
  return -1;
}

console.log(indexOf('potato', 'pot'));
console.log(indexOf('potato', 'ota'));
console.log(indexOf('potato', 'tat'));

console.log(lastIndexOf('potatopotato', 'pot'));
console.log(lastIndexOf('potatopotato', 'ota'));
console.log(lastIndexOf('potatopotato', 'tat'));

