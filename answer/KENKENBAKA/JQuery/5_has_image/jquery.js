flag = false

window.onload = function () {

  $('#button1').on("click", function () {
    if (flag === false) {
      $("#img-area").append($("<img>").attr("src", "n-DngcOb_400x400.jpg"))
      flag = true
    }
  })
}