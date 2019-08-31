let randoms = [];
const min = 1;
const max = 75;

function intRandom (min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

for (i = 0; i < 25; i++) {
  while(true) {
    let tmp = intRandom(min, max);
    if(!randoms.includes(tmp)) {
      randoms.push(tmp);
      break;
    }
  }
}

console.log(randoms);