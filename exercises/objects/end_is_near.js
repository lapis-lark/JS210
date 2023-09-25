function penultimate(string) {
  return string.split(' ').slice(-2)[0];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"