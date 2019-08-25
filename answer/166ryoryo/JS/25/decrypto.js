/* eslint-disable no-console */
const crypto = 'やくこみがんきいばていんるよは';
let aaa = '';
let subl = '';
for (let b = 1; b <= crypto.length; b++) {
  if (b % 3 === 0) {
    aaa += crypto[b - 1];
  } else {
    subl += crypto[b - 1];
  }
}
console.log(aaa);
console.log(subl);
