
let zero = {
    showCount: function () {
        let count = "hahah, gotcha";
        console.log(this.count);
    }
};
//showCount();

let one = {
    count: 1
};

let ninetynine = {
    count: 99,
    message: "gosh, this is weird"
};

one.showCount = zero.showCount;
one.showCount();

ninetynine.show = zero.showCount;
ninetynine.show();

zero.showCount();
zero.count = "Intriguing";
zero.showCount();

let zeroShowCount = zero.showCount;

let t1 = {
    count: 42
};
let t2 = {
    count: 99
};

zeroShowCount.call(t1, 1, 2, 3);
zeroShowCount.call(t2);

let print = function(x) {console.log(x);};
print.call(null, "Hello");


let printSeveral = function(x, y) {
    console.log("x is " + x);
    console.log("y is " + y);
    console.log(this);
};

// printOnePluss is a wrapper that represents "partially applied" arguments
let printOnePlus = printSeveral.bind({name: "Fred", address: "Here"}, "one hundred");
printOnePlus("this is y");


