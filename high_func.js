'use strict'
//高阶函数
var add = function(a,b,m) {
	return m(a) + m(b);
};
console.log(add(10,-20,Math.abs));
