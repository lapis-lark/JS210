let staggeredCase = (text) => { 
  let cap = true;
  let newText = '';
  for (c of text) {
    if (!c.match(/[a-z]/i)) {
      newText += c;
      continue;
    }
    newText += cap ? c.toUpperCase() : c.toLowerCase();
    cap = !cap;
  }
  return newText;
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"