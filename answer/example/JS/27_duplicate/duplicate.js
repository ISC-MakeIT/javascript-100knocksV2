/**
 *
 * @param {number} x
 * @param {Array} ar
 */
function isExistArray(x, ar) {
  return ar.some(v => v === x);
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
      if (!isExistArray(n, data)) { data.push(n); }
    }
  }
}

randomization(25, 75);
