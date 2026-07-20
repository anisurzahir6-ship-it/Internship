// =========================
// Part 3: Conditional Statements
// =========================

// Q1
// Question:
// Write a program to check whether a number is positive or negative.

const number = -10;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Output:
// Negative



// Q2
// Question:
// Write a program to check whether a student has passed or failed.
// Passing marks are 40.

const marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Fail



// Q3
// Question:
// Write a program to find the larger number between two numbers.

const n1 = 50;
const n2 = 70;

if (n1 > n2) {
    console.log("n1 is greater");
} else if (n2 > n1) {
    console.log("n2 is greater");
} else {
    console.log("Both are equal");
}

// Output:
// n2 is greater



// Q4
// Question:
// Write a program to find the largest among three numbers.

const num1 = 10;
const num2 = 30;
const num3 = 20;

if (num1 >= num2 && num1 >= num3) {
    console.log("num1 is greatest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is greatest");
} else {
    console.log("num3 is greatest");
}

// Output:
// num2 is greatest



// Q5
// Question:
// Write a program to check whether a number is even or odd.

const evenOdd = 17;

if (evenOdd % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Odd



// Q6
// Question:
// Write a program that prints:
// Excellent (marks above 90)
// Good (75–90)
// Average (50–74)
// Fail (below 50)

const score = 82;

if (score > 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}

// Output:
// Good