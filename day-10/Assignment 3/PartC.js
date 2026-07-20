// ===============================
// Part C: Loops
// ===============================

// Q1. Using a for loop, print numbers from 1 to 20.

console.log("Numbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// ...
// 20



// Q2. Using a while loop, print numbers from 20 to 1.

console.log("Numbers from 20 to 1:");

let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

// Output:
// 20
// 19
// 18
// ...
// 1



// Q3. Print the multiplication table of 7.

console.log("Multiplication Table of 7:");

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Output:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70



// Q4. Print all even numbers from 1 to 50.

console.log("Even Numbers:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Output:
// 2
// 4
// 6
// ...
// 50



// Q5. Find the sum of all numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum =", sum);

// Output:
// Sum = 5050