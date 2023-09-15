function generatePattern(n) {
  let stars = '*'.repeat(n - 1);
  num_str = ''
  for (let i = 1; i <= n; i ++) {
    num_str += String(i)
    console.log(`${num_str}${stars}`)
    stars = stars.slice(1)
  }
}

generatePattern(7);
generatePattern(3);