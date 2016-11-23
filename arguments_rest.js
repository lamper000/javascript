'use strict' 
// arguments rest 参数获取
var getabs = function(num) {
	if ( typeof(num) !== 'number' ) {
		throw 'Not a number';
	}
	if ( num >=0 ) {
		return num;
	}
	if ( num <0 ) {
		return -num;
	}
};
// var num = getabs('3');
// console.log(num);
var testArguments = function() {
	for (var i = 0; i < arguments.length; ++i) {
		console.log(arguments[i]);
	}
};
// testArguments(1,2,3,4);
var testRest = function(a,b,...rest) {
	console.log(a);
	console.log(b);
	console.log(rest);
};
testRest(1,2,3);
