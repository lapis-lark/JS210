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

/*
In question #1, the following statement is considered to be true:

"You can access the last element of an Array by using an index of `-1`: `myArray[-1]`"

As indicated in the JS book, negative values can be used to create properties on the Array object, but these aren't actually elements (and don't count towards an array's `length` property as such). Moreover, even if we were to loosely consider these properties as elements, this statement would still be incorrect because it does not guarantee access to the last "element" of the array. For example
```javascript
x = [1, 2, 3];
// [ 1, 2, 3 ]

x[-1] = 4;
// 4

x
// [ 1, 2, 3, '-1': 4 ]

x['a'] = 5
// 5

x;
// [ 1, 2, 3, '-1': 4, a: 5 ] 
// -1 is no longer the last "element"

x.length;
// 3

x.slice(-1);
// [3]
```
*/