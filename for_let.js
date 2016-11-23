'use strict'
// 变量作用域 for let使用
var glo = 1;
// console.log(window.glo);
var oldAlert = window.alert;
window.alert = function () {

}
// alert(1);
// window.alert = oldAlert;
// alert(2);
var testLet = function() {
	var arr = [1,2,3,4];
	for (let i = 0; i < arr.length; ++i) {
		console.log(arr[i]);
	}
	console.log(i); // 报错
};
// testLet();
