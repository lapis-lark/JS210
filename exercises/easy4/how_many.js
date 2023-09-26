const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let count = {};
  for (ele of arr) {
    count.hasOwnProperty(ele) ? count[ele] += 1 : count[ele] = 1;
  }
  console.log(count);
  for (let k of Object.keys(count)) {
    console.log(`${k}: ${count[k]}`);
  }
  return count;
}


countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1