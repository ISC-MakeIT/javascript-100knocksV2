'use strict';
randomization(25, 75);

/*
 * @param {number} has_order
 * @param {number} max
 */
function randomization(has_order, max) {
    let data = [];
    while (data.length < has_order) {
        let n = ~~(Math.random() * (max + 1));
        if (!(0 === n)) {
            if (!isExistArray(n, data)) {
                data.push(n);
            }
        }
    }
    console.log(data);
}

/**
 * 
 * @param {number} x 
 * @param {Array} ar 
 */
function isExistArray(x, ar) {
    let res = ar.some(function (v) {
        return v === x;
    });
    return res;
}