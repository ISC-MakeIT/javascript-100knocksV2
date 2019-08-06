function addImage () {
  let cImg = document.createElement("img");
  cImg.src = "ice.jpg";
  cImg.alt = "かき氷";
  document.getElementById("wrap").appendChild(cImg);
}