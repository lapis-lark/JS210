function reverseWords(str) {
  return [...str.split(' ')].map(word => [...word].reverse().join('')).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"