// =========================
// Part 2: Comparison Operators
// =========================

// Q1
// Question:
// Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.

const x = 10;
const y = 20;

console.log("x == y :", x == y);
console.log("x === y :", x === y);
console.log("x != y :", x != y);
console.log("x !== y :", x !== y);
console.log("x > y :", x > y);
console.log("x < y :", x < y);
console.log("x >= y :", x >= y);
console.log("x <= y :", x <= y);

// Output:
// x == y : false
// x === y : false
// x != y : true
// x !== y : true
// x > y : false
// x < y : true
// x >= y : false
// x <= y : true



// Q2
// Question:
// Predict the output of:
// console.log(10 == "10")
// console.log(10 === "10")

console.log(10 == "10");
console.log(10 === "10");

// Output:
// true
// false



// Q3
// Question:
// Predict the output of:
// console.log(null == undefined)
// console.log(null === undefined)

console.log(null == undefined);
console.log(null === undefined);

// Output:
// true
// false



// Q4
// Question:
// Write a program to compare the ages of two people and print who is older.

const age1 = 20;
const age2 = 30;

if (age1 > age2) {
    console.log("Person 1 is older");
} else if (age2 > age1) {
    console.log("Person 2 is older");
} else {
    console.log("Both are of the same age");
}

// Output:
// Person 2 is older