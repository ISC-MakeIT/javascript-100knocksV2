/* js27から */
const output = new Array(25);
let flag = 1;
let rand;
output[0] = Math.floor(Math.random() * 75 + 1);
for (let i = 1; i < output.length; i++) {
  while (flag) {
    rand = Math.floor(Math.random() * 75 + 1);
    for (let j = i - 1; j >= 0; j--) {
      if (output[j] === rand) {
        break;
      } else if (j === 0) {
        output[i] = rand;
        flag = 0;
      }
    }
  }
  flag = 1;
}
console.log(output);


/* 重複があるか確認 */
for (let i = 0; i < output.length - 1; i++) {
  for (let j = i + 1; j < output.length; j++) {
    if (output[i] === output[j]) {
      flag = 0;
    }
  }
}
if (flag === 0) {
  console.log('重複あり');
} else {
  console.log('重複なし');
}

/* js28並べ替え */
let work;
let minIndex;
for (let i = 0; i < output.length - 1; i++) {
  minIndex = i;
  for(let j = i + 1; j < output.length; j++) {
    if(output[minIndex] > output[j]) {
      minIndex = j;
    }
  }
  if(minIndex != i) {
    work = output[i];
    output[i] = output[minIndex];
    output[minIndex] = work;
  }
}
console.log(output);
