'use strict'
// iterable: forEacj
var a = [1,2,3];
var m = new Map([['Michael',95],['Bob',75],['Tracy',85]]);
var s = new Set([ 1,2,3,'3']);
a.name = 'Michael';
for (var x in a) {
//	console.log(x);
}
s.forEach(function (element , index , array) {
	console.log(index);
})
