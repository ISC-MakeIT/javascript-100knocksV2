// eslint-disable-next-line func-names
window.onload = function () {
  let i = window.sessionStorage.getItem('current');
  const j = document.getElementById('language');
  if (i == null) {
    i = 0;
  } else {
    j.value = i;
  }
};
// eslint-disable-next-line no-unused-vars
function setStorage() {
  const i = document.getElementById('language');
  const j = i.value;
  window.sessionStorage.setItem('current', j);
}
