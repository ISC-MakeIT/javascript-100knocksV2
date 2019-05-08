'use strict';
const word = '114514';
let out = '';
let padd = '00';
for (let i = 0; i < word.length; i++) {
    out += word[i] + padd;
}
console.log(out);