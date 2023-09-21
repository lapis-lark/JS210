function triangle(lines) {
  for (let i = 1; i <= lines; i++) {
    console.log('*'.repeat(i).padStart(lines));
  }

}

triangle(5);
triangle(7);