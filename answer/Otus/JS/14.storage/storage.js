window.onload = function () {
    let i = window.sessionStorage.getItem('current');
    let j = document.getElementById('language');
    if (i == null) {
      i = 0;
    } else {
      j.value = i;
    }
  };
  
  function setStorage() {
    let i = document.getElementById('language');
    let j = i.value;
    window.sessionStorage.setItem('current', j);
  };
