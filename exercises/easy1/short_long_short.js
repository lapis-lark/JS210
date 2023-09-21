function shortLongShort(str1, str2) {
  let sorted = [str1, str2].sort((str1, str2) => str1.length > str2.length);
  short = sorted.shift();
  long = sorted.shift();
  console
  console.log(`${short}${long}${short}`)
}

shortLongShort('fjksl', 'jfkdslfjdslkf');
shortLongShort('applezz', 'plum');
shortLongShort('plum', 'applezz');