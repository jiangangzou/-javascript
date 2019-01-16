// var value = 3;
// if (true) {
//     var value = 1;
// }
// console.log(value);
// const value = 2;

// const data = {
//     value: 1
// }

// data.value = 3;
// value = 4;
// console.log(value,'-------',data.value,'----------');

var value = "global";

// 例子1
// (function() {
    

//     // let value = 'local';
//     console.log(value);
// }());

// 例子2
{
    console.log(value);

    // const value = 'local';
};
