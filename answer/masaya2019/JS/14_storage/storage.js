function storage () {
  let elem = document.getElementById("pulldown");
  //セレクトボックスのインデックス番号を取得
  let selectNumber = elem.selectedIndex;
  //ストレージに保存
  window.sessionStorage.setItem("current", selectNumber);
};

window.onload = function () {
  //ストレージから取り出し
  let indexNumber = window.sessionStorage.getItem("current");
  let pulldown = document.getElementById("pulldown");
  pulldown.value = indexNumber;
};