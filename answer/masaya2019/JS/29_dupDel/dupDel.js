//配列の作成
let randoms = [];
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

//配列をpに表示
let ary = document.getElementById("array");
ary.textContent = randoms;

function deleteArray () {
  //text入力を取得
  let txt = document.getElementById("txt").value;
  let num = parseInt(txt);
  let index = randoms.indexOf(num);
  let ary = document.getElementById("array");
  if (index > -1) {
    randoms.splice(index, 1);
    ary.textContent = randoms;
  } else {
    ary.textContent = "error: Can't deleted";
  }
} 