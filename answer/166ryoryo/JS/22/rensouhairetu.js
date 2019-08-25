const a = {
  color: 'red',
  size: '100',
};

a.count = '5';

Object.keys(a).forEach((key) => {
  // eslint-disable-next-line no-console
  console.log(`key: ${key}, value: ${a[key]}`);
});
