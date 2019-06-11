const ary = [];
while (ary.length < 25) {
    let num = Math.floor(Math.random() * 74) + 1;
    if (ary.some(value => value === num) === false) {
        ary.push(num);
    } else {
    }
}
