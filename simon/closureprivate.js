
function MakeOne(count) {
//    let count...
    let self = {
        getCount: function () {
            return count;
        },
        setCount: function (v) {
            if (v % 2 === 0) {
                count = v;
            } else {
                console.log("NOPE, that's not even!");
            }
        }
    };
    return self;
}

let first = MakeOne(3);
let second = MakeOne(98);

console.log(first.getCount());
first.setCount(9);
first.setCount(8);
console.log(first.getCount());
