let many = [1, 2, 3];

console.log("many[0] is " + many[0]); // Indexes kinda start at zero...

console.log("many contains " + many.length + " items");
many[-4] = -4;
many[14] = 14;
console.log(many);
console.log("many contains " + many.length + " items");

many.push(101);
many.push(102);
console.log(many.pop());

console.log("many[7] is " + many[7]);
console.log("many['-4'] is " + many['-4']);
console.log("many[-5] is " + many[-5]);

for (let v of many) {
    console.log("> " + v);
}

console.log("1" == 1);
console.log("1" === 1);

let name = "Fred";
let name2 = "Fr";
name2 += "ed";
//name2 = new String("Fred");

console.log(name === name2);
console.log(Object.is(name, name2));

let num1 = new Number(1);
let num2 = new Number(1);

console.log(num1 === num2);
