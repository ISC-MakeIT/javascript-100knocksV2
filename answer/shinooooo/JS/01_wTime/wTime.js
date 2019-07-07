function time() {
  const weeks = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

  const now = new Date();

  const Year = now.getFullYear();

  const Month = now.getMonth() + 1;

  const Day = now.getDay();

  const Week = weeks[now.getDay()];

  const Hour = now.getHours();

  const Min = now.getMinutes();

  const Sec = now.getSeconds();

  const mSec = now.getMilliseconds();

  document.getElementById('date').textContent = `${Year}/${Month}/${Day}/(${Week})/${Hour}/${Min}/${Sec}/${mSec}`;
}

setInterval(time, 10);
