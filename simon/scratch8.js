
let it = {
    name: "Fred",
    address: "Over here"
};

let another = {
    id: 1234
};

let yetAnother = Object.assign(another, it);
console.log(another);
console.log(another === yetAnother);

let it2 = { ...it };
console.log(it2);

function doStuff() {}

doStuff.helpMe = "Why would you need help>";

console.log(doStuff.helpMe);