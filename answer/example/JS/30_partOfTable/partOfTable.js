'use strict';
let data = [];

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


function addTable(num_set) {
    let main = document.getElementById('main');
    let table = document.createElement('table');
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            td.textContent = num_set[j * 5 + i];
            // td.addEventListener('click', function () {
            //     alert(this.textContent);
            // });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    main.appendChild(table);
}

(function () {
    let data = randomization(25, 75);
    console.log(data);

})();
addTable(data);