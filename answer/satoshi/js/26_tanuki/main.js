




    var a = "ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。わたたしがからだをゆすっても、ふきれいな音は出ないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。鈴と、小鳥と、それからわたたし、みんなふちがって、みんないい。";
    
    // var q = a.split('')
    
    var result = [];
    
    for(var i in a){
        var value = a[i];
        var num = parseFloat(i) + 1;
        var j = a[num];
        if(value == 'ふ'){
            console.log('検知1');
        } else{
            if(value == j){
                console.log('検知2');
            } else{
                console.log(value);
                result.push(value);
               
            }
        }
        
    }


console.log(result.join(""));