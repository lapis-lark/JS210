/*
  IN: year (positive integer)
  OUT: string of which century this year corresponds to

  EX: 
    1: 1st
    203: 3rd
    200: 2nd
    1205: 13th

  DATA: strings, numbers, arrays
  ALGO: 
*/

function century(year) {
  cent = Number.parseInt((year / 100 + 1).toString());
  if (year % 100 === 0) cent -= 1;


  temp = cent.toString().slice(-2)
  if (temp[0] === '1') {
    return cent + 'th'
  } else {
    temp = Number.parseInt(temp.slice(-1))
  }

  switch(true) {
    case temp === 1:
      return cent + 'st';
    case temp === 2:
      return cent + 'nd';
    case temp === 3:
      return cent + 'rd';
    case [0, 4, 5, 6, 7, 8, 9].indexOf(temp) !== -1:
      return cent + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256))         // "3rd"
console.log(century(5))         // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"