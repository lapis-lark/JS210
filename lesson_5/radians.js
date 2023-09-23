function radiansToDegrees(radians) {
  return (radians * 360) / (2 * Math.PI);
}

console.log(radiansToDegrees(1));
console.log(radiansToDegrees(3));
console.log(radiansToDegrees(3.5));

function randomFromRange(min, max) {
  let range = [min, max].sort();
  let dif = range[1] - range[0];
  return Math.round(dif * Math.random() + range[0]);
}
console.log(randomFromRange(89, 122));
console.log(randomFromRange(5, 6));