// ===============================
// Part A: Conditions and Operators
// ===============================

// Q1. Take a number as input. If the number is divisible by 2, print "Even"; otherwise print "Odd".

let num = 8;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Even



// Q2. Take a number as input. If it is divisible by 3, print "Fizz".
// If it is divisible by 7, print "Buzz".
// If it is divisible by both 3 and 7, print "FizzBuzz".

let number = 21;

if (number % 3 === 0 && number % 7 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 7 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 7");
}

// Output:
// FizzBuzz



// Q3. Take three numbers and print the greatest number among them.

let a = 25;
let b = 70;
let c = 50;

if (a >= b && a >= c) {
    console.log("Greatest Number =", a);
} else if (b >= a && b >= c) {
    console.log("Greatest Number =", b);
} else {
    console.log("Greatest Number =", c);
}

// Output:
// Greatest Number = 70



// Q4. Check whether a student has passed or failed.
// Marks greater than or equal to 40 means Pass.

let marks = 65;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Pass



// Q5. Predict the output of logical operators (&& and ||)

console.log(true && false);
console.log(true || false);
console.log(false && true);
console.log(false || true);
console.log(10 > 5 && 20 > 15);
console.log(10 < 5 || 20 > 15);

// Output:
// false
// true
// false
// true
// true
// true