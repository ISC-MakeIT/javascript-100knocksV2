const ary = ['晴れ','雨','曇り','槍'];
for (let i = 0; i < 5; i++) {
  console.log("今日の天気は" + ary[Math.floor(Math.random()*ary.length)] + "です");
}