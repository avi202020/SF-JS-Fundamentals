

console.log("Hello");
try {
//throw new Error("Bad");
    throw "Bad";
    console.log("Remarkable");
//} catch (e) {
//    if (e instanceof Error) {
//        console.log("error")
//    } else {
//        console.log("Broke with " + e);
//    }
} finally {
    console.log("on the way out");
}

console.log("all done");
