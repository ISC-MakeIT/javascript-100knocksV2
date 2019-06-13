/**
 *
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
  const data = [];
  while (data.length < hasOrder) {
    const n = ~~(Math.random() * (max + 1));
    if (!(n === 0)) {
      if (!isExistArray(n, data)) {
        data.push(n);
      }
    }
  }
  return sort(data);
}

randomization(25, 75);
