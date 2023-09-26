function findFibonacciIndexByLength(digits) {
  let first = 1n;
  let second = 2n;

  for (let i = 4n;; i++) {
    let current = first + second;
    if (current / (10n**(digits - 1n)) !== 0n) return i;
    first = second;
    second = current;
  }
}

console.log(findFibonacciIndexByLength(2n) )  
console.log(findFibonacciIndexByLength(3n) )
console.log(findFibonacciIndexByLength(10n) )
console.log(findFibonacciIndexByLength(16n) )
console.log(findFibonacciIndexByLength(100n))
console.log(findFibonacciIndexByLength(1000n))
console.log(findFibonacciIndexByLength(10000n))

// The last example may take a minute or so to run.