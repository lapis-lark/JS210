function scope() {
  let x = 'x';
  var y = 'y';
  z = 'zup';
  if (true) {
    let a = 'a';
    var b = 'b';
  }

  console.log(x); // in scope of block
  console.log(y); // in scope of function
  console.log(z); // declaring a global variable accessible outside of this method
  // console.log(a); // ReferenceError: a is out of scope now (block scope)
  console.log(b); //still in scope of function
}

scope();

console.log(z); // z still within scope