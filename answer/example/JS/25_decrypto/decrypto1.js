const word = 'やくこみがんきいばていんるよは';
let out = '';
let both = '';
for (let i = 1; i <= word.length; i++) {
  if (i % 3 === 0) {
    out += word[i - 1];
  } else {
    both += word[i - 1];
  }
}
alert(out); //= >こんばんは
alert(both); //= >やくみがきいているよ
