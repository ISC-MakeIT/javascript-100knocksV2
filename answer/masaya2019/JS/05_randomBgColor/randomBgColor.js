let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("BG").style.backgroundColor = randomColor;
} );

// カラーコード(#16進数)作成

