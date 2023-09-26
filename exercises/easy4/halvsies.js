function halvsies(arr) {
  let last = arr.splice(Math.ceil(arr.length / 2));
  return [arr, last];
}





halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]