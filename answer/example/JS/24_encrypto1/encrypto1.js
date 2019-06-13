const word = '114514';
let out = '';
const padd = '00';
for (let i = 0; i < word.length; i++) {
  out += word[i] + padd;
}
alert(out);
