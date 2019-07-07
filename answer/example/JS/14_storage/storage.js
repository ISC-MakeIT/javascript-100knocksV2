// eslint-disable-next-line func-names
window.onload = function () {
  let i = window.sessionStorage.getItem('current');
  let j = document.getElementById('language');
  if (i == null) {
    i = 0;
  } else {
    j.value = i;
  }
};

// eslint-disable-next-line no-unused-vars
function setStorage() {
  let i = document.getElementById('language');
  let j = i.value;
  window.sessionStorage.setItem('current', j);
}
