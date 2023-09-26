function showMultiplicativeAverage(arr) {
  return (arr.reduce((memo, n) => n * memo ) / arr.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"