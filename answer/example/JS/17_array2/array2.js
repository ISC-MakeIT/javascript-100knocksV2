'use strict';
const ary = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
ary.forEach(function (v, index) {
    console.log(v + index);
});
// both
// for (let i in ary) {
//     console.log(ary[i] + i);
// }