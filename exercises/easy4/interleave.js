function interleave(arr1, arr2) {
  combo = [];
  for (let i = 0; i < arr1.length; i++) {
    combo.push(arr1[i], arr2[i]);
  }

  return combo;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]