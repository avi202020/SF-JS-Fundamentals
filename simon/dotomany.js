function upper(value) {
    return value.toUpperCase();
}

function count(value) {
    return value.length;
}

function map(f, l) {
    let result = [];
    
    for (let v of l) {
        result.push(f(v));
    }
    return result;
}


let startValues = [ "hello", "there", "how", "are", "you"];

let endValues = map(upper, startValues);
console.log(startValues);
console.log(endValues);

let endValues2 = map(count, startValues);
console.log(startValues);
console.log(endValues2);


let aFunction = count;
let res = aFunction("Hello");
console.log(res);

console.log(startValues.map(count)); // Container that has a map function is called "functor"

function reduce(f, l) {
    l = [...l];
    let result = l.shift();
    while (l.length > 0) {
        result = f(result, l.shift());
    }
    return result;
}

function adder(a, b) { return a + b; }

console.log(reduce(adder, endValues2));
console.log(endValues2);


console.log("sum of numbers 1 to ten is " + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(adder));

function printer(v) { console.log("Value is " + v);}
endValues2.forEach(printer);

[
    {name: "Fred", grade: 3.2}, 
    {name: "Jim", grade: 2.4},
    {name: "Sheila", grade: 3.9}
]
        .filter(p => p.grade > 3)
        .map(p => "Student called " + p.name + " has grade " + p.grade)
//        .forEach(s => console.log(s));
        .forEach(console.log); // Check definition of forEach :)

