function rotateArray(arr) {
  if (!Array.isArray(array)) {
    return;
  }

  if (arr.length === 0) {
    return [] 
  }
  
  return arr.slice(1).concat([arr[0]]);
}