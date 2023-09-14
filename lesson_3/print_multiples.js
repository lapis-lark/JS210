function logMultiples(n) {
  nums = []
  for (let i = 1; i <= 100; i++) {
    if (i % n === 0 && i % 2 === 1) nums.push(i);
  }
  nums.reverse().forEach(n => console.log(n))
}

function logMultiples(n) {
  for (let i = Math.floor(100 / n) * n; i >= n; i -= n) {
    if (i % n === 0 && i % 2 === 1) console.log(i);
  }
}

logMultiples(17);
logMultiples(21);
