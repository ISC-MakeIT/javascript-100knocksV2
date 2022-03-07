num = 1

window.onload = function () {
  $('#button1').on("click", function () {
    $("#hello-area").append($("<div>").text("Hello " + num))
    num += 1
  })
}