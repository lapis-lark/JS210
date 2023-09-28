function product() {
  let new_arr = Array.from(arguments);
  return new_arr.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);