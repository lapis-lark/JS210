function centerOf(str) {
  let center = str.length / 2
  if (str.length % 2 === 0) {
    return str.slice(center - 1, center + 1);
  } else {
    return str[center];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"