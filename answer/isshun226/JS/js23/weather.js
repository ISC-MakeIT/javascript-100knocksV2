const array = ["晴れ", "雨", "曇り", "うんこ"];
for (let i = 0; i < array.length; i++) {
    const random = Math.floor(Math.random() * array.length);

    console.log(`天気は多分${array[random]}です`);
}