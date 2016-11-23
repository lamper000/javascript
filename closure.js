'use strict'
// 闭包:函数作为返回值
var arr = [1,2,3,4,5,6];
var lazy_sum = function (arr) {
	var sum = function() {
		return arr.reduce(function (x ,y) {
			return x + y;
		})
	};
	return sum;
}
// console.log(lazy_sum(arr));
var f1 = lazy_sum(arr);
// console.log(f1());
var f2 = lazy_sum(arr);
// console.log(f1 === f2);//false
// console.log(lazy_sum(arr)() === lazy_sum(arr)()); //true

function count() {
	var arr = [];
	for (var i = 0; i <= 3; ++i) {
		arr.push(function () {
			return i * i;
		});
	}
	return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());
