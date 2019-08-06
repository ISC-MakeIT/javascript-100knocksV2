function randomPic () {
  // 0~4の乱数生成
  let randomNum = Math.floor(Math.random() * 5);
  let pic = document.getElementById("pic");
  switch ( randomNum ) {
    case 0:
      pic.src = "IMG/nino1.jpg";
      pic.alt = "二乃1";
      break;
    case 1:
      pic.src = "IMG/nino2.jpg";
      pic.alt = "二乃2";
      break;
    case 2:
      pic.src = "IMG/nino3.jpg";
      pic.alt = "二乃3";
      break;
    case 3:
      pic.src = "IMG/nino4.jpg";
      pic.alt = "二乃4";
      break;
    case 4:
      pic.src = "IMG/nino5.jpg";
      pic.alt = "二乃5";
      break;
  }
}