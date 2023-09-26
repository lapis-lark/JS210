function wordSizes(str) {
  let count = {};
  if (str.length === 0) return count;
  let lengths = str.split(' ').map(c => c.length);
  for (l of lengths) {
    (count[l] !== undefined) ? count[l] += 1 : count[l] = 1;
  }

  return count;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}