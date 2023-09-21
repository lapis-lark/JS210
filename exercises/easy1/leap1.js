function isLeapYear(year) {
  switch(true) {
    case year % 4 !== 0:
      return false;
    case year % 400 === 0:
      return true;
    case year % 100 === 0:
      return year < 1752;
  }
  return true;
}






console.log(isLeapYear(1800))
console.log(isLeapYear(1700))
console.log(isLeapYear(1900))
console.log(isLeapYear(1000))
console.log(isLeapYear(400))
console.log(isLeapYear(780))
console.log(isLeapYear(1216))
