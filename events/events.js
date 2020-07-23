// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Below, write the necessary code so that clicking any "Click Me"
// element will increment its paired counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.


// Your code here.

let buttons = document.querySelectorAll(".button");

function handler(e) {
    let target = e.target;
    let container = target.nextElementSibling;
    let count = container.innerHTML;
    count = + count;
    count++;
    container.innerHTML = "" + count;
    e.preventDefault();
}

for (let b of buttons) {
    b.addEventListener('click', handler);
}

console.log("completed setup");
