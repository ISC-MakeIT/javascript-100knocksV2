const ary = ['晴れ', '雨', '曇り', '槍'];
for (let i = 0; i < 4; i++) {
  alert(ary[Math.floor(Math.random() * ary.length)]);
}
