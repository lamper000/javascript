'use strict'
// 箭头函数

console.log(((x) => x)(1));

var fn = (x ,y) => x * x + y * y;
console.log(fn(3 ,4));

var obj = () => ( { name:'myname' } );
console.log(obj());

// this 已经指向 call和apply无法重新指向
var obj = {
	birth:1990,
	getAge: function (year) {
		var b = this.birth;
		var f = () => new Date().getFullYear() - this.birth;
		return f.call({birth:2000},year);
	}
}
var age = obj.getAge(2015);
console.log(age)
