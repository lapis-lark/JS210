/* 
  IN: none
  OUT: return = none, log each integer divible by 3 or 5; append `!` if both

  DATA: numbers, strings
  ALGO: build array of bools; if contains true, log num; if all true, log num + !


*/
function multiplesOfThreeAndFive() {
  for (let i = 3; i <= 100; i++) {
    arr = [];
    arr.push(i % 3 === 0);
    arr.push(i % 5 === 0) ;
    result = '';

    if (!arr.includes(true)) {
      continue;
    } else if (arr.includes(false)) {
      console.log(i);
    } else {
      console.log(i + '!');
    }
  }
}



multiplesOfThreeAndFive();
