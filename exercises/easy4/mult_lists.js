function multiplyList(arr1, arr2) {
  let products = [];
  for (let i = 0; i < arr1.length; i++) {
    products.push(arr1[i] * arr2[i]);
  }
  
  return products;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]