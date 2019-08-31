let num = "114514";
let result = "";
num.split("");
for (let i = 0; i < num.length; i++) {
  let insert = Math.floor(Math.random()*90) + 10;
  insert = String(insert);
  let newNum = num[i] + insert;
  result += newNum;
}
console.log(result);