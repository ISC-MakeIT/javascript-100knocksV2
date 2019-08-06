function sum () {
  let txt = document.getElementById("txt").value;
  let num = parseInt(txt);
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}