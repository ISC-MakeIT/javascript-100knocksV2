'use strict';
let data = [];
let error = 'error: Can\'t deleted';


(function () {
    let data = randomization(25, 75);
    console.log(data);
    reload(data);
})();

/*
 * @param {number} has_order
 * @param {number} max
 */
function randomization(has_order, max) {
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


function del() {
    let order = parseInt(document.getElementById('order').value, 10);
    let idx = data.indexOf(order);
    console.log(idx);
    if (!(-1 === idx)) {
        let res = data.splice(idx, 1);
        console.log('delete ' + res);
    } else {
        console.log(error);
    }
    reload(data);
}

/**
 * @param {any} d - out put data
 */
function reload(d) {
    let e = document.getElementById('out');
    e.textContent = d;
}