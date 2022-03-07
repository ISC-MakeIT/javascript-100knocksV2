window.onload = function () {
  "abc".split('').forEach((element, i) => setOnClickToButtons("." + element + "-btn", eval("randomColor" + (i + 1))))
}

function setOnClickToButtons(selector, randomColorFunc) {
  $(selector).on("click", function () {
    $(this).parent().css("background-color", randomColorFunc())
  })
}

function randomColor1() {
  return ("#" + ("000000" + (Math.random() * 0xFFFFFF | 0).toString(16)).slice(-6))
}

function randomColor2() {
  let color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  for (count = color.length; count < 6; count++) {
    color = "0" + color;
  }
  return ("#" + color)
}

function randomColor3() {
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += (16 * Math.random() | 0).toString(16);
  }
  return ("#" + color)
}

//super oreore code (ha-to