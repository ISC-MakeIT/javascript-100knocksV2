let sentence = "ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。わたたしがからだをゆすっても、ふきれいな音は出ないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。鈴と、小鳥と、それからわたたし、みんなふちがって、みんないい。";
let answer = sentence.replace(/ふ/g, '');
let answer2 = answer.replace(/た+た/g, 'た');
console.log(answer2);