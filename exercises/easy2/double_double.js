function twice(n) {
  n = String(n);
  if (n.slice(0, n.length / 2) === n.slice(n.length / 2)) {
    console.log(n);
  } else {
    console.log(+n * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676