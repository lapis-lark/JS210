function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  if (arr.length === 0) {
    return [] 
  }
  
  return arr.slice(1).concat([arr[0]]);
}

function rotateRightmostDigits(num, digits) {
  let arr = String(num).split('');
  let unrotated = arr.slice(0, arr.length - digits)
  let rotated = rotateArray(arr.slice(arr.length - digits))
  return Number((unrotated.concat(rotated).join('')));
}

function maxRotation(num) {
  for (let digits = String(num).length; digits > 1; digits -= 1) {
    num = rotateRightmostDigits(num, digits);
  }
  
  return num;
}