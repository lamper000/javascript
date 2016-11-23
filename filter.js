'use strict';
// filter 过滤元素 : 根据函数返回值TRUE或者FALSE判断
var arr = [1,2,3,4,5,6,7,8];
var r = arr.filter(function(x) { 
	return x % 2 !==0;
});
console.log(r);
