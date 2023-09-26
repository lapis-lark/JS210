const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(name) {
  let caller = name;
  return function (num) {
    console.log(caller);
    console.log(num + num);
  }
}