'use strict';
// Map() Set()
var m = new Map([['Michael',95],['Bob',75],['Tracy',85]]);
m.delete('Michael');
if (m.has('Michael')) {
	console.log(m.get('Michael'));
} else {
	m.set('Michael',99);
}
// console.log(m.get('Michael'));

var s = new Set([1,2,3]);
console.log(s);
s.add('3');
s.add('3');
console.log(s);
