// ===============================
// Part F: Functions
// ===============================

// Q1. Create a function that takes two numbers and prints their sum.

function add(a, b) {
    console.log("Sum =", a + b);
}

add(10, 20);

// Output:
// Sum = 30



// Q2. Create a function that takes a number and prints its square.

function square(num) {
    console.log("Square =", num * num);
}

square(8);

// Output:
// Square = 64



// Q3. Create an arrow function that takes three numbers and prints their average.

const average = (a, b, c) => {
    console.log("Average =", (a + b + c) / 3);
};

average(10, 20, 30);

// Output:
// Average = 20



// Q4. Create a function that takes a string and prints its length.

function stringLength(str) {
    console.log("Length =", str.length);
}

stringLength("JavaScript");

// Output:
// Length = 10



// Q5. Create a function that takes two numbers and prints the greater number.

function greaterNumber(a, b) {
    if (a > b) {
        console.log("Greater Number =", a);
    } else if (b > a) {
        console.log("Greater Number =", b);
    } else {
        console.log("Both numbers are equal.");
    }
}

greaterNumber(25, 50);

// Output:
// Greater Number = 50