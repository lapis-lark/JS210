function integerToString(int) {
  const ZERO = 48;
  let digits = 1
  for (;; digits += 1) {
    if ( int / 10**(digits) <= 1) break;
  }

  let digitArr = [];
  for (let i = 1; i <= digits; i+= 1) {
    digitArr.push(Math.floor(int / 10**(digits - i)));
    int = int % 10**(digits - i)
  }
  
  digitArr.map(c => String.fromCharCode(ZERO + c))
  return digitArr.join('');
}

function signedIntegerToString(int) {
  if (int < 0) {
    return '-' + integerToString(int * -1)
  } else if (int > 0) {
    return '+' + integerToString(int);
  } else {
    return '0';
  }
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
