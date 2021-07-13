
var ary = {'color':'red','size':'100'};
var ary1 = {'count':'5'};

const result = Object.assign(ary, ary1);

for (var key in result){
    console.log(`keyは：` + key + "->value:" + result[key]);
}