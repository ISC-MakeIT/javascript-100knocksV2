const rensouhairetu = {
  color: 'red',
  size: '100',
};
rensouhairetu.count = '5';

Object.keys(rensouhairetu).forEach((key) => {
  alert(`key: ${key}, value: ${rensouhairetu[key]}`);
});
