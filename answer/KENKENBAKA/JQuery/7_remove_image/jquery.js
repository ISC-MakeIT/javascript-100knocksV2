LIMIT = 3
count = 0

window.onload = function () {
  $('#button1').on("click", function () {
    if (count < LIMIT) {
      let newImgElement = $("<img>")
      newImgElement.attr("src", "n-DngcOb_400x400.jpg")
      newImgElement.on("click", function () {
        $(this).remove()
        count--
      })
      $("#img-area").append(newImgElement)
      count++
    }
  })
}