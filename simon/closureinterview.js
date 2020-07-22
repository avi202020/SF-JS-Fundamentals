
//for (var i = 0; i < 3; i++ ) {
//for (let i = 0; i < 3; i++ ) {
for (var i = 0; i < 3; i++ ) {
    (function(value) {
        setTimeout(() => console.log(value), 1000 * i);
    })(i);
}

console.log("value of i is " + i);
