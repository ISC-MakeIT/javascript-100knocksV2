for (let i = 1; i <= 100; i++) {
  // eslint-disable-next-line eqeqeq
  if (i % 15 == 0) {
    // eslint-disable-next-line no-console
    console.log('fizzbuzz');
  // eslint-disable-next-line eqeqeq
  } else if (i % 5 == 0) {
    // eslint-disable-next-line no-console
    console.log('buzz');
  // eslint-disable-next-line eqeqeq
  } else if (i % 3 == 0) {
    // eslint-disable-next-line no-console
    console.log('fizz');
  } else {
    // eslint-disable-next-line no-console
    console.log(i);
  }
}
