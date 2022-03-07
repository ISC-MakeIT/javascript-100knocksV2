num = 0

window.onload = function () {
  $('#button1').on("click", function () {
    if (num === 0) {
      let newDivElement = $('div')
      newDivElement.text("Hello " + num)
      newDivElement.attr("class", "hello")
      $("#hello-area").append(newDivElement)
    } else {
      $(".hello").text("Hello " + num)
    }
    num += 1
  })
}