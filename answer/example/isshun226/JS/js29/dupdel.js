let array = new Array(25);
for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * (75 - 1 + 1) + 1);
    if (array.includes(random) == false) {
        array[i] = random;
    } else {
        i--;
    }
}
array.sort(
    function (a, b) {
        return (a < b ? -1 : 1);
    }
)
let val = 1;
let idx = array.indexOf(val);
if (idx >= 0) {
    array.splice(idx, 1);
}
console.log(array);