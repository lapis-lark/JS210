function afterMidnight(time) {
  let hoursMinutes = time.split(':').map(n => Number(n));
  let date = new Date(0, 0, 0, hoursMinutes[0], hoursMinutes[1]);

  return date.getHours() * 60 + date.getMinutes();
}

function beforeMidnight(time) {
  return (60 * 24) - afterMidnight(time);
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686