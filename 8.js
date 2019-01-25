// var fetch = require('node-fetch');

// function* gen() {
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url);
//     console.log(result.bio);
// }

// var g = gen();
// var result = g.next();

// result.value.then(function(data) {
//     return data.json();
// }).then(function(data) {
//     g.next(data);
// })


var fetch = require('node-fetch');

function* gen() {
    var r1 = yield fetch('https://api.github.com/users/github');
    var r2 = yield fetch('https://api.github.com/users/github/followers');
    var r3 = yield fetch('https://api.github.com/users/github/repos');

    console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
}

var g = gen();
var result1 = g.next();

result1.value.then(function(data) {
    return data.json();
})
.then(function(data) {
    return g.next(data).value;
})
.then(function(data) {
    return data.json();
})
.then(function(data) {
    return g.next(data).value
})
.then(function(data) {
    return data.json();
})
.then(function(data) {
    g.next(data);
});
