let x = [1, 3, 4, 89, 'ab', 'xo'];

function join(arr) {
  let joined = '';
  for (ele of arr) {
    joined += String(ele);
  }

  return joined;
}

console.log(join(x));