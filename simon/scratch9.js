
// Callbacks!

let f = () => console.log("Bing!");

let t = setTimeout(f, 2000);

console.log("Started...");

// Closure

let data = [1, 2, 3, 4, 5, 6, 7];

//let f1 = x => x % 2 === 0;
//let f2 = x => x % 3 === 0;

function getDivBy(v) {
    return x => x % v === 0;
}

function and(f1, f2) {
    return x => f1(x) && f2(x);
}

data.filter(getDivBy(2)).forEach(v => console.log(v));
console.log("---------------------");
data.filter(getDivBy(3)).forEach(v => console.log(v));
console.log("---------------------");
data.filter(and(getDivBy(3), getDivBy(2))).forEach(v => console.log(v));

