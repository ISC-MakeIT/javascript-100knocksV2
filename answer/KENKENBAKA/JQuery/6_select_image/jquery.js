LIMIT = 3
count = 0

window.onload = function () {
  $('#button1').on("click", function () {
    if (count < LIMIT) {
      $("#img-area").append($("<img>").attr("src", "n-DngcOb_400x400.jpg"))
      count++
    }
  })
}