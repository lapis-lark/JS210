function isPalindrome(str) {
  let i = 0;
  for (c of [...str].reverse()) {
    if (c !== str[i])return false;
    i += 1;
  }
  return true;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true