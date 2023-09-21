function cleanUp(str) {
  new_str = ''
  for (c of str) {
    (c >= 'a' && c <= 'z') ? str_arr.push(c) : new_str;
  }
  return new_str;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "