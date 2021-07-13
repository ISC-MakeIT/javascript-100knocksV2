

function isExistArray(x, ar) {
    return ar.some(v => v === x);
  }

function renomization(hasOrder, max){
    const data = [];
    while (data.length < hasOrder){
        const n = Math.floor(Math.random() * (max + 1));
        if (!(n === 0)) {
            if (!isExistArray(n, data)) {data.push(n);}
        }
    
    }
}

var a = renomization(25,75);

console.log(a);