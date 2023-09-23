let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, prop) {
  return Object.keys(obj).indexOf(prop) !== -1;
}

function objectHasProperty(obj, prop) {
  return Object.hasOwn(obj, prop);
}

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

function incrementProperty(obj, prop) {
  if (objectHasProperty(obj, prop)) {
    obj[prop] +=1;
  } else {
    obj[prop] = 1;
  }
  return obj[prop];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

function copyProperties(obj1, obj2) {
  let copied = 0;
  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    copied += 1
  }
  return copied;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }

function wordCount(str) {
  let obj = {};
  for (let word of str.split(' ')) {
    incrementProperty(obj, word);
  }
  return obj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }