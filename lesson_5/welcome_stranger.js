function greetings(nameComponents, info) {
  console.log(`hello ${nameComponents.join(' ')}!`)
  console.log(`nice to have a ${info['title']} ${info['occupation']} around.`)
}
greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.