const data = [];

/**
 * @param {number} x
 * @param {Array} ary
 * @returns {boolean}
 */
function isExistArray(x, ary) {
  return ary.some(v => v === x);
}

/**
 * @param {Array} ary
 * @return {Array}
 */
function sort(ary) {
  ary.sort((a, b) => (a < b ? -1 : 1));
}

/*
 * @param {number} hasOrder
 * @param {number} max
 */
function randomization(hasOrder, max) {
  while (data.length < hasOrder) {
    const n = ~~(Math.random() * (max + 1));
    if (!(n === 0)) {
      if (!isExistArray(n, data)) {
        data.push(n);
      }
    }
  }
  sort(data);
  return data;
}


function addTable(n) {
  const main = document.getElementById('main');
  const table = document.createElement('table');
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
      const td = document.createElement('td');
      td.textContent = n[j * 5 + i];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  main.appendChild(table);
}

addTable(randomization(25, 75));
