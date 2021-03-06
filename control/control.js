/****************************************************************************/
// EXERCISE 1:
//
// In the function below, return true if the input variable is equal
// to the number 42.  Otherwise return false.  Use an `if' statement
// to achieve this.
function exercise1(input) {

    // Your code here.

    return input === 42;
//    if (input === 42) {
//        return true;
//    } else {
//        return false;
//    }
}

/****************************************************************************/
// EXERCISE 2:
//
// In the function below, return true if the input variable is equal
// to the number 42.  If the input is the number 43 then return null.
// In all other cases return false.
//
// Use an `if' statement to achieve this.
function exercise2(input) {

    // Your code here.
    if (input === 42)
        return true;
    else if (input === 43)
        return null;
    else
        return false;
}

/****************************************************************************/
// EXERCISE 3:
//
// Repeat exercise 2, this time using a `switch' statement.
function exercise3(input) {

    // Your code here.
    switch (input) {
        case 42:
            return true;
//            break; // not needed after return
        case 43:
            return null;
//            break; // not needed after return
        default:
            return false;
//            break; // not needed after return
    }
}

/****************************************************************************/
// EXERCISE 4:
//
// In the function below, write a loop that calls the `counter'
// function exactly 3 times.
//
// Example of calling the counter function:
//
//     counter();
//
function exercise4(counter) {

    // Your code here.
    for (let c = 0; c < 3; c++) {
        counter();
    }
}

/****************************************************************************/
// (BONUS) EXERCISE 5:
//
// The function below will be called with an array of numbers.  Return
// the sum of those numbers.
function exercise5(numbers) {

    // Your code here.
    let sum = 0;

    for (let v of numbers) sum += v;

//    for (let idx in numbers) {
//        sum += numbers[idx]; /// REALLY BAD IDEA!!!!!
//    }
    return sum;
}

