function time()
{
  let weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");

  let now = new Date();

  let Year = now.getFullYear();

  let Month = now.getMonth() + 1;

  let Day = now.getDay();

  let Week = weeks[now.getDay()];

  let Hour = now.getHours();

  let Min = now.getMinutes();

  let Sec = now.getSeconds();

  let mSec = now.getMilliseconds();

  document.getElementById("date").textContent = Year + "/" + Month + "/" + Day + "/" + "(" + Week + ")" + "/" + Hour + "/" + Min + "/" + Sec + "/" + mSec ;
}

setInterval('time()',10);