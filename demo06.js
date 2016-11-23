'use strict'
// window.fun this null window均可 但是window!==this
var count = 0;
var oldParseInt = parseInt;
console.log(oldParseInt);
window.parseInt = function () {
	count +=1;
	if (this == window) {
		alert('this is window');
	}
	return oldParseInt.apply(this,arguments);
}
parseInt(10);
parseInt(20);
parseInt(20);
console.log(count);
