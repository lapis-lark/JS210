function swap(str) {
  return str.split(' ').map(word => {
    let first = word[0];
    let last = word.slice(-1);
    word_arr = [...word];
    word_arr[0] = last;
    word_arr[word.length - 1] = first;
    return word_arr.join('');
  }).join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"