function stringToSignedInteger(str) {
  let signature = getSignature(str);
  if (signature) str = str.slice(1);
  let convertTable = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 
    6: 6, 7: 7, 8: 8, 9: 9, 0: 0,
  }
  let num = 0;
  let columns = str.length;
  for (let i = 0; i < str.length; i += 1) {
    num += (convertTable[str[i]] * 10**(str.length - i - 1));
  }

  if (signature === '-') return -num;
  return num;
}

function getSignature(str) {
 return ['-', '+'].includes(str[0]) ? str[0] : null;
}


stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100