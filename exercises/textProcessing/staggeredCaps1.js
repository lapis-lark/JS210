let staggeredCase = (text) => { 
  let cap = true;
  let newText = '';
  for (c of text) {
    newText += cap ? c.toUpperCase() : c.toLowerCase();
    cap = !cap;
  }
  return newText;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"