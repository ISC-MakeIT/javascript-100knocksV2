let ary = {'color':'red','size':'100'};
ary['count'] = '5';

Object.keys(ary).forEach(function (key) {
  console.log("keyは:" + key + " " + "valueは:" + ary[key]);
},ary)