var readlineSync = require('readline-sync');

function ave_grade() {
  let grade_arr = [];
  for (i = 1; i < 4; i++) {
    grade_arr.push(+readlineSync.question(`grade ${i}: `));
  }
  let result = Math.round(grade_arr.reduce((memo, grade) => memo += grade, 0) / grade_arr.length);
  switch (true) {
    case (result >= 90):
      grade = 'A';
      break;
    case (result >= 80):
      grade = 'B';
      break;
    case (result >= 70):
      grade = 'C';
      break;
    default:
      grade = 'F';
  }
  console.log(`average grade: ${result}; letter grade: ${grade}`);
}

ave_grade();