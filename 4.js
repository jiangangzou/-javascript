// 1. 
// var s = Symbol();
// console.log(s);

// 4.
// var s = Symbol('foo');
// console.log(s instanceof Symbol);  //false
// 6.
// var s1 = Symbol();
// var s2 = Symbol();

// console.log( s1 === s2);

// var s1 = Symbol('foo');
// var s2 = Symbol('foo');

// console.log(s1 === s2);

7.

// var sym = Symbol('My symbol');
// console.log("your symbol is" + sym)
// var s0 = Symbol('foo')
// var s1 = Symbol.for('foo')
// var s2 = Symbol.for('foo')

// console.log(s0 === s2);
// console.log(s0);
// console.log(s1);
// console.log(s2);
// console.log(s1 === s2);

var s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1))

var s2 = Symbol('foo');
console.log(Symbol.keyFor(s2));