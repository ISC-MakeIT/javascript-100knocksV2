window.onload = () => {
  let a = window.sessionStorage.getItem('key');
  const b = document.getElementById('outputsave');
  if (a == null) {
    a = 0;
  } else {
    b.value = a;
  }
};

const store = () => {
  const a = document.getElementById('outputsave');
  const b = a.value;
  window.sessionStorage.setItem('key', b);
};
