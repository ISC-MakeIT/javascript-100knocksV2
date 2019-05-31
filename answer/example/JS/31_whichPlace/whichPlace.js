const data = [];

/**
 * @param {number} x
 * @param {Array} ary
 * @returns {boolean}
 */
function isExistArray(x, ary) {
  const res = ary.some(v => v === x);
  return res;
}

/**
 * @param {Array} ary
 * @return {Array}
 */
function mySort(ary) {
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
  mySort(data);
  return data;
}


function addTable(e) {
  const main = document.getElementById('main');
  const table = document.createElement('table');
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
      const td = document.createElement('td');
      td.textContent = e[j * 5 + i];
      td.addEventListener('click', () => alert(this.textContent));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  main.appendChild(table);
}

addTable(randomization(25, 75));
