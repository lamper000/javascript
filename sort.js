'use strict'
// sort 转换成字符串再排序
var arr = [10,20,1,2];
console.log(arr.sort());

var arr2 = arr.sort(function(x,y) { 
	if (x < y) {
		return -1;
	}
	if (x > y) {
		return 1; // 放前面
	}
	return 0;
});
console.log(arr2);
console.log(arr === arr2); //处理后的数组会保持一致
