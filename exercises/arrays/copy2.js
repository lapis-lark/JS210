function concat(array1, secondArgument) {
  let new_arr = array1.slice();

  if (Array.isArray(secondArgument)) {
    for (ele of secondArgument) {
      new_arr.push(ele);
    }
  } else {
    new_arr.push(secondArgument);
  }

  return new_arr;
}


function concat() {
  new_arr = arguments[0].slice();

  for (let i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (ele of arguments[i]) {
        new_arr.push(ele);
      }
    } else {
      new_arr.push(arguments[i]);
    }
  }

  return new_arr;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]