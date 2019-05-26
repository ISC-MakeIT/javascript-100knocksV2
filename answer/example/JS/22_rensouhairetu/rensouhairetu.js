'use strict';
const rensouhairetu = {
    'color': 'red',
    'size': '100'
};
rensouhairetu.count = '5';

Object.keys(rensouhairetu).forEach(function (key) {
    console.log( `key: ${ key }, value: ${ rensouhairetu[ key ] }` );
});
