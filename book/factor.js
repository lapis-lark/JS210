function factorial(n) {
  acc = 1;
  for (; n > 1; n--) {
    acc *= n;
  }
  return acc;
}

console.log(factorial(5))

console.log(factorial(7))

console.log('all done')