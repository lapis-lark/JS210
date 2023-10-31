let x = 5;

function increment(n) {
  n += 1; // n references the same location in memory as x
          // the above operation causes n to reference a new area in memory
          // containing the value x references + 1
}

increment(x)

console.log(x); // return 5; reassignment is non-mutating/ primitives can't be mutated

let y = [5];

function incrementArrAt0(arr) {
  arr[0] += 1;
}
incrementArrAt0(y);

console.log(y[0]);