// x = 99
// var x = 99
let x = a = b = 99;
/*
console.log("c is " + c);
debugger;
*/

console.log(x);
x = '"hello" she said!';
x = "hello won't you join me";
console.log(x);

if (x !== null) {
    console.log("x has a value");
}

let count = Number.MAX_SAFE_INTEGER - 5; // 64 bit IEEE 754 floating point number
console.log(count);

for (let i = 0; i < 10; i++) {
    console.log("> " + count++);
}

if (true) {
    console.log("That's true'");
}

var a = 99;
var b = a;
var c = 100;
console.log("c is " + c);

if (a === b) {
    console.log("Same");
} else {
    console.log("different");
}

console.log(`The value of a is ${a} and of b is ${b}`);