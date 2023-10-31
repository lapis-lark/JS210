var x = 'hi'; // redeclaration allowed

function x() { // hoisted to top (functions dec above var dec), thus x redeclared to 'hi'
  return 'bye';
}

console.log(x); // outputs 'hi

// let y = 'hi';

function y() { // error from reassignment with let
  return 'bye';
}

// console.log(y); // never reached; SyntaxError thrown above, no redeclaration allowed

function foo() {
  if (false) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // undefined
  // console.log(b); // b not defined (reference error)
}

foo();

function test() {
  return bar();

  function bar() {
    return 42;
  }
}

console.log(test()) // nested hoisting occurs; logs 42