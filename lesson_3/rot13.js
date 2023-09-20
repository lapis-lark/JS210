const UPPER_MIN = 65;
const UPPER_MAX = 90;
const LOWER_MIN = 97;
const LOWER_MAX = 122;
const ALPHA_RANGE = 26;
const ROT = 13;

function rot13(str) {
  let rot = '';

  for (c of str) {
    let charCode = c.charCodeAt(0);

    if (charCode >= UPPER_MIN && charCode <= UPPER_MAX) {
      rot += adjustChar(c, ROT, UPPER_MIN);
    } else if (charCode >= LOWER_MIN && charCode <= LOWER_MAX) {
      rot += adjustChar(c, ROT, LOWER_MIN);
    } else {
      rot += c;
    }
  }
  return rot;
}

function adjustChar(char, rotation, min) {
  let charCode = char.charCodeAt(0);
  return String.fromCharCode(((charCode + rotation - min) % ALPHA_RANGE) + min);
}




console.log(rot13(rot13('Teachers OPEN the DOOR')))
console.log(rot13('teacher'))
console.log(rot13('wassup'))
console.log(rot13('hello'))