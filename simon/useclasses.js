
class Date {
    constructor(d, m, y) {
        this.d = d;
        this.m = m;
        this.y = y;
    }
    
    get month() {
        return this.m;
    }
   
    set month(m) {
        if (m >= 1 && m <= 12) {
            this.m = m;
        } else {
            console.log("bad month");
        }
    }
    toString() {
        return `Date of ${this.d}/${this.m}/${this.y}`;
    }
}

let d1 = new Date(22, 7, 2020);
console.log(d1);
console.log(d1.toString());
d1.month = 13;
console.log(d1.toString());

class Holiday extends Date {
    constructor(d, m, y, name) {
        super(d,m,y);
        this.name = name;
    }
    
    toString() {
        return super.toString() + " a holiday called " + this.name;
    }
}

let newYear = new Holiday(1,1,2021, "new year's day");
console.log(newYear.toString());

console.log(typeof Date);
console.log(d1 instanceof Date);
console.log(d1 instanceof Holiday);

console.log(typeof Holiday);
console.log(newYear instanceof Date);
console.log(newYear instanceof Holiday);