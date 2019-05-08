'use strict';
const raw = 'ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。わたたしがからだをゆすっても、ふきれいな音は出ないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。鈴と、小鳥と、それからわたたし、みんなふちがって、みんないい。';
let ret = '';
ret = raw.replace(/ふ/g, '');
ret = ret.replace(new RegExp(/た+た/, 'g'), 'た');
console.log(ret); //=>わたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。わたしがからだをゆすっても、きれいな音は出ないけど、あの鳴る鈴はわたしのように、たくさんなうたは知らないよ。鈴と、小鳥と、それからわたし、みんなちがって、みんないい。