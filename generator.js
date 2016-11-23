'use strict'
var gen = function* (max) {
	var t,
		a = 0,
		b = 1,
		n = 1;
	while (n < max) {
		yield a;
		t = a + b;
		a = b;
		b = t;
		n++;
	}
	return a;
}
var f = gen(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
for (var x of gen(5)) {
	console.log(x);
}
