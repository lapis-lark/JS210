function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkGoldbach(n) {
  let primes = [];
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  
  let answers = []

  for (p1 of primes) {
    for (p2 of primes) {
      if (p2 < p1) continue;
      answers.push([p1, p2]);
    }
  }

  answers.forEach(pair => {if (pair[0] + pair[1] === n)
    console.log(`${pair[0]} ${pair[1]}`);
  })
}













checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53