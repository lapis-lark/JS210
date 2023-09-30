function scope() {
  let x = 'x';
  var y = 'y';
  z = 'zup';
  if (true) {
    let a = 'a';
    var b = 'b';
  }

  console.log(x);
  console.log(y);
  console.log(z);
  // console.log(a); // ReferenceError: a is out of scope now (block scope)
  console.log(b);
}

scope();

console.log(z); // z still within scope (it is an attribute of window)