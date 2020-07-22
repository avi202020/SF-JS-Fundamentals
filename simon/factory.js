
function Date(d,m,y) {
    console.log("Making something with " + d + " and more");
    this.day = d;
    this.month = m;
    this.year = y;
}

let dateProto = {
    toString: function() {
        return "Date with " + this.day + "...";
    }
};

Date.prototype = dateProto;

// new behaves kinda like this:
let result = {};
Date.call(result, 1, 2, 3);
// new "returns" result to the caller
console.log(result);

let d = new Date(1,2,3);
console.log(d);
console.log(d.toString());
//console.log(this.day);

let d2 = new Date(2, 3, 4);
console.log(d2.toString());

