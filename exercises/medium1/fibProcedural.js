function fibonacci(nth) {
  let sequence = [1, 1];
  for (; nth > 2; nth -= 1) {
    let fib = sequence[0] + sequence[1];
    sequence = [sequence[1], fib];
  }
  return sequence[1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050