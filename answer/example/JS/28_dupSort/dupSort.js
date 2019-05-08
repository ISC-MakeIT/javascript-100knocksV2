'use strict';
let data = randomization(25, 75);

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
    mySort(data);
    return data;
}

/**
 * 
 * @param {number} x 
 * @param {Array} ary 
 * @returns {boolean}
 */
function isExistArray(x, ary) {
    let res = ary.some(function (v) {
        return v === x;
    });
    return res;
}

/**
 * @param {Array} ary
 * @return {Array}
 */
function mySort(ary) {
    ary.sort(function (a, b) {
        return (a < b ? -1 : 1);
    });
}