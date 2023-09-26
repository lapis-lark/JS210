function isPalindromicNumber(n) {
  str = String(n);
  str = [...str].map(c => {
    return (c <= '9' && c >= '0') ? c : '';
  }).join('');
  return str === [...str].reverse().join('');
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true