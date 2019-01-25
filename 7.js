// let promise = new Promise(function (resolve,reject) {
//     console.log('Promise');
//     resolve();
// });

// promise.then(function() {
//     console.log('resolved');
// });

// console.log('Hi!');

// const getJSON = function(url) {
//     const promise = new Promise(function(resolve,reject) {
//         const handler = function() {
//             if(this.readyState !== 4) {
//                 return;
//             }
//             if(this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open('GET',url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     });
//     return promise;
// };

// getJSON('/posts.json').then(function(json) {
//     console.log('Contents:' + json);
// },function(error) {
//     console.log('出错了',error);
// });

// getJSON('/posts.json').then(function(posts) {
//     //...
// }).catch(function(eoor) {
//     console.log('发生错误',error);
// })

// p.then((val) => console.log('fulfilled:',val)).catch((err) => {
//     console.log('rejected',err)
// });

// //等同于
// p.then((val) => console.log('fulfilled:',val))
//     .then(null,(err) => console.log('rejected',err));

// const promise = new Promise(function(resolve,reject) {
//     throw new Error('test');
// });
// promise.catch(function(error) {
//     console.log(error);
// })

// //等价于以下写法
// const promise = new Promise(function(resolve,reject) {
//     try {
//         throw new Error('test');
//     } catch(e) {
//         reject(e)
//     }
// });
// promise.catch(function(error) {
//     console.log(error);
// })

// const promise = new Promise(function(resolve,reject) {
//     reject(new Error('test'));
// });
// promise.catch(function(error) {
//     console.log(error)
// })

// const promises = [2,3,5,6,7,11,13].map(function (id) {
//     return getJSON('/post/' + id + ".json");
// })

// Promise.all(promises).then(function (posts) {
//     //...
// }).catch(function(reason) {
//     //....
// })

// const preloadImage = function(path) {
//     return new Promise(function (resolve,reject) {
//         const image = new Image();
//         image.onload = resolve;
//         image.onerror = reject;
//         image.src = path;
//     });
// };

function getFoo() {
    return new Promise(function (resolve,reject) {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e)
    }
};

function run(generator) {
    const it = generator();

    function go(result) {
        if(result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        },function(error) {
            return go(it.throw(error));
        })
    }
    go(it.next());
}

run(g)