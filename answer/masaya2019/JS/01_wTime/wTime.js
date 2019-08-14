wTime();

function clock () {
  const target = document.getElementById("nowDate");
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let dayOfWeek = now.getDay();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let msec = now.getMilliseconds();
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
  target.textContent = year + "/" + month + "/" + day + "/" + dow + "/" + hour + "/" + min + "/" + sec + "/" + msec;
}

function wTime () {
  setInterval("clock();",10);
}