
const x = 99;

console.log(x);

//x = 100;

// object is essentially a "map", "associative array"

const myObj = {
    name: "Fred",
    age: 25
};

console.log(myObj);
myObj.age = 26; // Allowed because we're not modifying "myObj" just the thing
// to which it refers.
myObj.address = "Over the rainbow";
console.log(myObj);

console.log("myObj has an element address with the value " + myObj['address']);

//myObj = {}; // No, because myObj is const

// NO OVERLOADING
function isLeap(year = 2021) {
//    console.log("I don't know if " + year + " is a leap year");
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

let retVal = isLeap(2020);
console.log(retVal);

console.log("Calling show, prematurely: ");
show("a", "b");

function show(a, c, d, e, ... b) {
    console.log("a is " + a);
    console.log("b is " + b);
    console.log("There are " + b.length + " variable args")
    for (let v of b) {
        console.log(v);
    }
//    console.log("v is " + v);
}
//showMore("a-more", "b-more");
//let showMore = show;
//console.log("Calling showMore: ");

show(1, 2, 3, 4, 5, 6);

let many = [ 9, 8, 7, 6];
show("fixed arg", ...many);

console.log(show.name);
console.log(show.length);

let more;
more = [1, 2, ...many, 3, ...many, 4];
console.log(more === many);
console.log("more is " + more);
console.log("many is " + many);

