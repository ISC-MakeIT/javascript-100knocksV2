'use strict';
var rensouhairetu = {
    'color': 'red',
    'size': '100'
};
rensouhairetu.count = '5';
Object.keys(rensouhairetu).forEach(function (key) {
    console.log('keyは: ', key, 'valueは: ', rensouhairetu[key]);
});