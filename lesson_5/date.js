let today = new Date;

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(`today is ${daysOfWeek[today.getDay()]} the ${numSuffix(today.getDate())} (${months[today.getMonth()]})`);

function numSuffix(date) {
  if ([1, 21, 31].indexOf(date) !== -1) {
    return (date + 'st');
  } else if ([2, 22].indexOf(date) !== -1) {
    return (date + 'nd');
  } else if ([3, 23].indexOf(date) !== -1) {
    return (date + 'rd');
  } else {
    return (date + 'th');
  }
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return `${daysOfWeek[date.getDay()]} the ${numSuffix(date.getDate())}`;
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}
function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  return `today is ${day} (${month})`;
}

console.log(formattedDate(today));
let tomorrow = new Date(today.getTime());
let nextWeek = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
nextWeek.setDate(today.getDate() + 7);
console.log(formattedDate(tomorrow));
console.log(formattedDate(nextWeek));

function formatTime(date) {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`
}

console.log(formatTime(today));
console.log(formatTime(tomorrow));