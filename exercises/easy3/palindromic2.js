function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = [...str].map(c => {
    return (c <= 'z' && c >= 'a') ? c : '';
  }).join('');
  return str === [...str].reverse().join('');
}


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
isRealPalindrome('hello')