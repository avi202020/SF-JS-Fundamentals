
let p = {
    legs: 4,
    fur: true,
    speak: function() {
        console.log("Gurgling noise");
    },
    show: function() {
        console.log("I'm a p.. I have " + this.legs + " legs and " +
                (this.fur ? "" : "no ") + "fur");
    }
};

let dog = Object.create(p);
dog.speak = function() {
    console.log("woof");
};
let fish = Object.create(p);
fish.legs = 0;
fish.fur = false;

console.log(dog.legs);
dog.speak();
console.log(dog);

console.log(fish.legs);
fish.speak();
console.log(fish);
fish.show();
dog.show();

p.show = function() {
    console.log("Don't look!");
};
fish.show();
dog.show();
