function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let a = arr1.sort();
  let b = arr2.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false