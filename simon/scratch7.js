(function () {
    "use strict"; // DO NOT PUT THIS AT THE TOP OF A FILE!!!

//x = "hello";

// Control of object properties writability, enumerability, deletability

    let myObj = {
        gender: "M"
    };
    Object.defineProperty(myObj, "name", {
        value: "Fred",
        configurable: false, // false prevents deletion and change of type
        enumerable: false,
        writable: false
    });

//delete myObj.name;

//    myObj.name = "Jim";
//    console.log(myObj.name);
    console.log(myObj);
    for (let k in myObj) {
        console.log("myObj has a key " + k);
    }

    console.log(typeof {});
    
    console.log(myObj.toString());
    console.log("myObj 'owns' toString()? " + myObj.hasOwnProperty("toString"));
})(); // Immediately Invoked Function Expression.

