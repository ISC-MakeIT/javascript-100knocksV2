const yajuusenpai = '1145141919';
let inmu = '';
function decrypt() {
    for (let i = 0; i < yajuusenpai.length / 2; i++) {
        inmu += yajuusenpai[i * 2];
    }
    console.log(inmu);
}
decrypt();

