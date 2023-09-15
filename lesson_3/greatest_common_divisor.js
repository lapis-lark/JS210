/*
  IN: two nums
  OUT: greatest common divisor

  ALGO: starting at n2 (smaller n), decrement till 1; return when both divible
*/

function gcd(n1, n2) {
  for (let i = n2; i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) return i;
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2))    // 1