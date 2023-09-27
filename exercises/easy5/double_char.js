function repeater(str) {
  let str_arr = [];
  [...str].forEach(c => str_arr.push(c.repeat(2)));
  return str_arr.join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""