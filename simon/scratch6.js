
let x = 100;

console.log(x.toString());
console.log((12).toString());
console.log(12..toString());

console.log("10 is " + 010);

let address = "Over the rainbow";

let myObj = {
    name: "Fred",
    address,
    toString: function() {
        return "I'm an object with name Fred";
    }
};

console.log(myObj["name"]);

//delete myObj.name;
//console.log(myObj["name"]);
//console.log(myObj.name);

console.log(myObj);


