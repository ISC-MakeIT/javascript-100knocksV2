let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  let textForm = document.getElementById("textForm").value;
  let num = parseInt(textForm);
  let result = num.toString(2);
  let resultForm = document.getElementById("resultForm");
  resultForm.value = result;
});