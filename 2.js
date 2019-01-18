// let arr = [{value: 1},{value: 2}];

// let message = `<ul>
//                     ${arr.map((item) => {
//                         return `<li>${item.value}</li>`
//                     })}
//                 </ul>`
// console.log(message);

// join() 方法用于把数组中的所有元素放入一个字符串。

// 元素是通过指定的分隔符进行分隔的。

let arr = [{value: 1},{value: 2}];
let message =` 
                <ul>
                    ${arr.map((item) => {
                        return `
                                <li>${item.value}</li>`
                    }).join('')}
                </ul>`.trim();
console.log(message);