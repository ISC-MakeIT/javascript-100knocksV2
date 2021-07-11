var CryptoJS = require('crepto-js');

var pwd = "password";

function Encrypt(word){
    return CryptoJS.AES.Encrypt(word, pwd).toString();

}






var raw="123";

var result = Encrypt(raw);

console.log(result);