//配列の作成
const randoms = [];
const min = 1;
const max = 75;

function intRandom (min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

for (i = 0; i < 25; i++) {
  while(true) {
    let tmp = intRandom(min, max);
    if(!randoms.includes(tmp)) {
      randoms.push(tmp);
      break;
    }
  }
}

function compareFunc(a, b) {
  return a - b;
}

randoms.sort(compareFunc);

//テーブルの作成
function createTable () {
  const wrap = document.getElementById("wrap");
  const table = document.createElement("table");
  for (let j = 0; j <= 4; j++ ) {
    //tr作成
    const tr = document.createElement("tr");
    for (let i = j; i < 25; i = i + 5) {
      //td作成
      const td = document.createElement("td");
      //添え字の配列を表示
      td.textContent = randoms[i];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  wrap.appendChild(table);
}

createTable();