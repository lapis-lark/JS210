function average(num_arr) {
  sum(num_arr) / num_arr.length;
}

function sum(num_arr) {
  let total = 0;
  for (n of num_arr) { total += +n }
  return total;
}

console.log(average([34, 56, 188]))