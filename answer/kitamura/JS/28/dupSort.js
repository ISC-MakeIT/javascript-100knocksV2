const output = new Array(25);
let flag = 1;
let rand;
for (let i = 0; i < output.length; i++) {
  while (flag) {
    rand = Math.floor(Math.random() * 75 + 1);
    if (output.indexOf(rand) < 0) {
      output[i] = rand;
      flag = 0;
    }
  }
  flag = 1;
}
console.log(output);


/* 重複があるか確認 */
const dupCheck = (ary) => {
  let dupFlag = 0;
  for (let i = 0; i < ary.length - 1; i++) {
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[i] === ary[j]) {
        dupFlag = 1;
      }
    }
  }
  return dupFlag;
};


flag = dupCheck(output);
if (flag === 1) {
  console.log('重複あり');
} else {
  console.log('重複なし');
}

/* js28並べ替え */
let work;
let minIndex;
for (let i = 0; i < output.length - 1; i++) {
  minIndex = i;
  for (let j = i + 1; j < output.length; j++) {
    if (output[minIndex] > output[j]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    work = output[i];
    output[i] = output[minIndex];
    output[minIndex] = work;
  }
}
console.log(output);
