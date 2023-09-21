function multisum(limit) {
  let acc = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      acc += i;
    }
  }
  return acc
}



console.log(multisum(5))
console.log(multisum(50))
console.log(multisum(15))
console.log(multisum(3))