let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let new_obj = {};

Object.keys(obj).forEach(k => (new_obj[k.toUpperCase()] = obj[k]));

console.log(new_obj);