'use strict'
// apply(obj,[1,2,3]) call(obj,1,2,3)指定方法作用域并调用
var getAge = function() {
	var y = new Date().getFullYear();
	return y-this.birth;
};

var person = {
	name:'小明',
	birth:1994,
	age:getAge
}
console.log(person.age());
console.log(getAge.apply(person));

var max = Math.max(1,2,3,4);
console.log(max);
max = Math.max.apply(null,[1,2,3,4]);
console.log(max);
