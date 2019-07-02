const yajuu = '14111';
const senpai = '15499';
let string = '';
function encrypt() {
    for (let i = 0; i < yajuu.length; i++) {
        string += yajuu[i] + senpai[i];
    }
    console.log(string);
}
encrypt();