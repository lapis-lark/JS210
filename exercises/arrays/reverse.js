function reverse(input) {
  let reversed = '';
  if (Array.isArray(input)) {
    reversed = [];
    for (ele of input) {
      reversed.unshift(ele);
    }
  } else {
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
  }
  return reversed;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
