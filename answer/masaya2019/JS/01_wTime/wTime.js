wTime();

function clock () {
  let target = document.getElementById("nowDate");
  let now = new Date();
  let Year = now.getFullYear();
  let Month = now.getMonth() + 1;
  let Day = now.getDate();
  let DayOfWeek = now.getDay();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();
  let Msec = now.getMilliseconds();
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][DayOfWeek];
  target.textContent = Year + "/" + Month + "/" + Day + "/" + DOW + "/" + Hour + "/" + Min + "/" + Sec + "/" + Msec;
}

function wTime () {
  setInterval("clock();",10);
}






