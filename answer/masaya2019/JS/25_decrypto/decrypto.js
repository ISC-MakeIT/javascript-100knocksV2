const crypto='やくこみがんきいばていんるよは';
let result = "";
crypto.split("");
for (let i = 0; i < crypto.length; i++) {
  if (i % 3 == 2) {
    result += crypto[i];
  }
}
console.log(result);