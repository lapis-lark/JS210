// HOISTING

the temporal dead zone refers to how variables are treated in a program before they are initialized to a value.
for example:
```javascript
  console.log(x); //temporal dead zone
  var x = 10;

```
rewritten with hoisting:
```javascript
var x;
console.log(x);
x = 10;
```
declaring variables with let rather than var will return an error rather than undefined
```javascript
console.log(y);
let y = 5; // ReferenceError: Cannot access 'y' before initialization
```

// HOW DOES THE '==' OPERATOR PERFORM COMPARISON?
string + int = convert string to int first
null + undefinded = true when compared with each other, false otherwise
bool + other = convert bool to int
NaN = false always (even with NaN)
Arrays = false unless same array; converted to string, then possibly to number for non-arrays

// HOW TO AVOID HOISTING PROBLEMS
  1. avoid var where possible
  2. if using var, declare them at the top of the block/function they belong to
  3. don't declare functions/variables in non-function blocks
  4. declare let/const variables as close to where they will be used as possible
  5. declare functions before calling them

