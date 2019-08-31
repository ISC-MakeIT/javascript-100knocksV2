const sentence = "ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。\nわたたしがからだをゆすっても、ふきれいな音は出ないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。\n鈴と、小鳥と、それからわたたし、みんなふちがって、みんないい。";

let newSentence = sentence.replace(/たた/g, "た");
let result = newSentence.replace(/ふ/g, "");
console.log(result);