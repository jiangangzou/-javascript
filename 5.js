// var colors = ["red", "green","blue"];

// for(var i = 0,len = colors.length; i <len; i++) {
//     console.log(colors[i]);
// }

// function createIterator(items) {
//     var i = 0;
//     return {
//         next: function() {
//             var done = (i >= items.length);
//             var value = !done ? items[i++]: undefined;
//             return {
//                 done: done,
//                 value: value
//             };
//         }
//     };
// }

// var iterator = createIterator([1,2,3]);

// // console.log(iterator.i);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var obj = {}
// obj[Symbol.iterator] = function() {
//     return createIterator([1,2,3]);
// }

// for(let value of obj) {
//     console.log(value)
// }
// function cd(value){
//     console.log(value)
// }

// function forof(obj,cb) {
//     let iterable,result;
//     console.log(obj)
//     if(typeof obj[Symbol.iterator] !== "function")
//     {
//         throw new TypeError(`${obj.name}is not iterable`);
//     }
       
//     if(typeof cb !== "function")

//         throw new TypeError("cb must be callable");
//     iterable = obj[Symbol.iterator]();

//     result = iterable.next();
//     while(!result.done) {
//         cb(result.value);
//         result = iterable.next();
//     }
// }

// forof(obj,cd);

// var colors = ["red","green","blue"]

// for(let index of colors.keys()) {
//     console.log(index)
// }

// for(let color of colors.values()) {
//     console.log(color);
// }

// for(let item of colors.entries()) {
//     console.log(item)
// }
var colors = ["red", "green", "blue"];

for (let index of colors.keys()) {
    console.log(index);
}

// 0
// 1
// 2

for (let color of colors.values()) {
    console.log(color);
}

// red
// green
// blue

for (let item of colors.entries()) {
    console.log(item);
}

// [ 0, "red" ]
// [ 1, "green" ]
// [ 2, "blue" ]

