'use strict'
// map/reduce
var pow = function(x) {
	return x * x;
};
var arr = [1,2,3,4,5,6,7,8,9];
arr.map(pow);
// console.log(arr.map(pow));
// console.log(arr.map(String));

var result = arr.reduce(function(x, y) { //接收两个参数
	return x + y;
});
// console.log(result);
// 联系
function string2int(s) {

	var arr = s.split();
	var result = arr.reduce(function(x,y){
		console.log(arr[1]);
		return x * 10 + y;
	});
	console.log(result);
	return result;
}

if (string2int('0') === 0) {
}

	console.log(typeof(string2int('0')));
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
	if (string2int.toString().indexOf('parseInt') !== -1) {
		console.log('请勿使用parseInt()!');
	} else if (string2int.toString().indexOf('Number') !== -1) {
		console.log('请勿使用Number()!');
	} else {
		console.log('测试通过!');
	}
}
else {
	console.log('测试失败!');
}
