function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

// let { baz, qux, bar } = foo(1, 2, 3);
let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.quz;
let bar = obj.bar;
