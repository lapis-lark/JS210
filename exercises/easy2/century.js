/*
  IN: year 1-20000
  OUT: century with 'th', 'st', etc.

  EX: 2000 -> '20th'
      2001 -> '21st'
      1 = st
      2 = nd
      3 = rd
      4, 5, 6, 7, 8, 9, 10 = th

  DATA: strs, nums

  ALGO:
    get century by dividing by 100, add 1 if n % 100 === 0

*/

function century(year) {
  cent = Number((year / 100).toFixed(0)) + 1;
  if (year % 100 === 0) cent -= 1;
  cent = String(cent);
  
  switch (true) {
    case ('0' || '4' || '5' || '6' || '7' || '8' || '9'):
      cent += 'th';
      break;
    case '1':
      cent += 'st';
      break;
    case '2':
      cent += 'nd';
      break;
    case '3':
      cent += 'rd';
      break;
  }
  console.log(cent);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"