function bannerize(str) {
  edgeRow(str);
  middleRow(' '.repeat(str.length));
  middleRow(str)
  middleRow(' '.repeat(str.length));
  edgeRow(str);
}

function edgeRow(str) {
  console.log(`+${'-'.repeat(str.length + 2)}+`);
}

function middleRow(str) {
  console.log(`| ${str} |`)
}

bannerize('hey there everyone!')