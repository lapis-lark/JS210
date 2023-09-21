function crunchy(str) {
  return [...str].reduce((memo, c)  => ((memo.slice(-1) !== c) ? memo + c : memo), '');
}
function crunch(str) {
  new_str = '';
  for (c of str) {
    if (new_str.slice(-1) !== c) new_str += c;
  }
  return new_str;
}

console.log(crunchy('aaabbc'));
console.log(crunchy('aaabbc'));
console.log(crunchy('aaabbc'));


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""