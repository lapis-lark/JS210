function repeatedCharacters(str) {
  let count = {};
  [...str].forEach(c => {
    c = c.toLowerCase();
    count[c] ? count[c] += 1 : count[c] = 1;
  })

  for (let [k, v] of Object.entries(count)) {
     if (v === 1) delete count[k];
  }

  console.log(count);
  return count;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }