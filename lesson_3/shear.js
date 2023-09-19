function shear(str) {
  let leading_spaces = spaces(str);
  let trailing_spaces = spaces(str.split('').reverse().join(''));

  str = str.slice(leading_spaces, str.length);
  str = str.slice(0, str.length - trailing_spaces);
  return str;
}

function spaces(str) {
  for (let s = 0; s < str.length; s++) {
    if (!(str[s] === ' ')) return s;
  }
  return (str.length - 1);
}

console.log(shear('  abc     ') === 'abc');
console.log(shear('  abc    fsd '));
console.log(shear('  abc     a'));
console.log(shear('  abc     '));
console.log(shear('abc  l   '));
