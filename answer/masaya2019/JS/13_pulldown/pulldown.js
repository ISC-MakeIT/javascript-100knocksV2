function pulldown () {
  let pulldown = document.getElementById("pulldown");
  for (i = 0; i <= 200; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    pulldown.appendChild(option);
  }
}