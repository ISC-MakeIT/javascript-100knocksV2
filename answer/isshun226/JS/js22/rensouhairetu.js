let array = { color: 'red', size: '100' };
array.count = '5';
for (let key in array) {
    console.log('keyは:' + key + ' ' + 'valueは:' + array[key]);
}