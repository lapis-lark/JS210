// ASSIGNMENTS AND COMPARISON
  /*
    assignment is performed with the `=` operator; comparison can be performed with
    the equality operator `==` or the strict equality operator `===`

    the strict equality will return false unless the compared operands are of the
    same type and equal, whereas the equality operator will attempt to coerce the operands
    to the same type before comparing them. NaN will always return false when using
    the equality operator; therefore, use the method `isNaN()`
  */

// VARIABLE SCOPE
  /*
    the scope of a variable depends upon its lexical context and the keyword it is 
    declared with. 
      let: block scope
      const: block scope
      var: function scope
      no keyword: global scope (it becomes a property of the global object)
    
    declaring variables outside of block or function in js gives them global scope; 
    that is, their scope coincides with the global scope and is then accessible 
    everywhere within the program
  */

// PRIMITIVE VALUES, TYPES AND TYPE CONVERSIONS
  /*
    the primitive values are: string, number, boolean, undefined, and null
    also bigNum and symbols, but we haven't covered those yet
    arrays are a type of object, hence the `typeof` keyword returns `'object'` with
    arrays; use `Array.isArray` to determine if an object is an array

    coercing strings to numbers:
      use Number(), parseInt(), or parseFloat();
      Number() will return NaN if the entire string cannot be converted to a number;
        Number('abc123');        // NaN
      the unary plus operator `+` will do the same thing, follows same rules as Nunber()
        +'123' === 123;
      parseInt will return the digits in a string until a non-numerical character
        parseInt('123ad3r'); // 123
        parseInt('ab123'); // NaN
      parseFloat can hand floating point

    numbers to strings:
      use String() or toString();
      can also use string concatenation like '' + 123 (not recommended, not clear)

    get truthiness of value with `!!` or `Boolean()`

    implicit conversions happen with string concatenation, number addition, and 
    the non-strict equality operator
    e.g. 
      1 + true       // true is coerced to the number 1, so the result is 2
      '4' + 3        // 3 is coerced to the string '3', so the result is '43'
      false == 0     // false is coerced to the number 0, so the result is true
  */

// 

function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  }
}

/*
let obj = {
  foo() { 
    console.log('foo')
  },

  bar() {
    console.log('bar')
  },
}
*/

let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};


let goo = [1, 2, 3];
let [first, second, third] = goo;

let {foo, bar, qux} = obj;

add3(...foo)

let noo = [4, 5, 6];
let [a, b, c] = noo;

// clone arr
let  j = [1, 2, 3];
let k = [...j];

// WRITE AN EXAMPLE OF A PARTIAL FUNCTION
function concatNameComponenents(first, last, title) {
  return (`${title} ${first} ${last}`);
}

function titleFunctionMaker(title) {
  return function(first, last) {
    return concatNameComponenents(first, last, title);
  }
  return concatNameComponenents;
}

let makeDoctor = titleFunctionMaker('Dr.');

let makeJane = concatNameComponenents.bind(null, 'jane')

/*
  lines 1 - 3 are a function declaration for 
*/