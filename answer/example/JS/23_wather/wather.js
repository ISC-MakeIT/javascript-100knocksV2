'use strict';
const ary = ['晴れ', '雨', '曇り', '槍'];
for (var i = 0; i < 4; i++) {
    console.log(ary[Math.floor(Math.random() * ary.length)]);
    //=> 晴れ
    //=> 曇り
    //=> 晴れ
    //=> 槍
}