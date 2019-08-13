const save = () => {
  const num = document.getElementById('Language').selectedIndex;
  localStorage.setItem('select_num', num);
};

const load = () => {
  document.getElementById('Language').selectedIndex = localStorage.getItem('select_num');
};
