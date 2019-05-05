'use strict';
const word = 'やくこみがんきいばていんるよは';
let out = '';
let both = '';
for (let i = 1; i <= word.length; i++) {
    if (0 === i % 3) {
        out += word[i - 1];
    } else {
        both += word[i - 1];
    }
}
console.log(out); //=>こんばんは
console.log(both); //=>やくみがきいているよ