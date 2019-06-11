let array = new Array(25);
let array2 = new Array(75);
for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * (75 - 1 + 1) + 1);
    if (array.includes(random) == false) {
        array[i] = random;
    } else {
        i--;
    }
}
console.log(array);