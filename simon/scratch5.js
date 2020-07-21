
let many = [9, 8, 7, 6];

many.surprise = "Hey, look";

for (let v of many) {
    console.log("> " + v);
}
console.log("--------------------");

for (let v in many) {
    console.log("element at index " + v + " is " + many[v]);
}

console.log("--------------------");

let thingy = {
    "name": "Fred",
    "address": "Over here",
    toString: function() {
        return "I'm fred";
    }
};

for (let k in thingy) {
    console.log("element at index " + k + " is " + thingy[k]);
}

for (let idx = 0; idx < many.length; idx++) {
    console.log("element at index " + idx + " is " + many[idx]);
}

let counter = 3;
while (counter >= 0) {
    console.log(counter--);
    if (counter === 1) {
        break;
    }
}
console.log("end...");