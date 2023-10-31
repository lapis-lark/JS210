function findFibonacciIndexByLength(digits, sequence = [1n, 1n], index = 2n) {

  if (String(sequence[1]).length == digits) {
    console.log(`index = ${index}`)
    return index;
  } else {
    let next = sequence[0] + sequence[1];
    sequence = [sequence[1], next];
    findFibonacciIndexByLength(digits, sequence, index + 1n);
  }
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.