function indexOf(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) return i;
  }
  return -1;
}
function lastIndexOf(arr, ele) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ele) return i;
  }
  return -1;
}

