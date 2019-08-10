window.onload = () => {
  let storage = window.sessionStorage.getItem('key');
  const choose = document.getElementById('outputsave');
  if (storage == null) {
    storage = 0;
  } else {
    choose.value = storage;
  }
};

const store = () => {
  const choose = document.getElementById('outputsave');
  const number = choose.value;
  window.sessionStorage.setItem('key', number);
};
