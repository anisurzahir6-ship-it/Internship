// ===============================
// Part D: Arrays
// ===============================

// Q1. Create an array [10, 20, 30, 40, 50] and perform array operations
// such as push, pop, length and update values.

let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

arr.push(60);
console.log("After Push:", arr);

arr.pop();
console.log("After Pop:", arr);

console.log("Length:", arr.length);

arr[2] = 35;
console.log("Updated Array:", arr);

// Output:
// Original Array: [10, 20, 30, 40, 50]
// After Push: [10, 20, 30, 40, 50, 60]
// After Pop: [10, 20, 30, 40, 50]
// Length: 5
// Updated Array: [10, 20, 35, 40, 50]



// Q2. Using a for...of loop, print all elements of
// ['Apple', 'Mango', 'Banana', 'Orange']

let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log("Fruits:");

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Mango
// Banana
// Orange



// Q3. Find the largest number in
// [23, 56, 89, 12, 100, 45]

let numbers = [23, 56, 89, 12, 100, 45];
let largest = numbers[0];

for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}

console.log("Largest Number =", largest);

// Output:
// Largest Number = 100



// Q4. Find the sum of all elements in
// [5, 10, 15, 20, 25]

let arr2 = [5, 10, 15, 20, 25];
let sum = 0;

for (let num of arr2) {
    sum += num;
}

console.log("Sum =", sum);

// Output:
// Sum = 75



// Q5. Count the number of even numbers in
// [2, 5, 8, 11, 14, 17, 20]

let arr3 = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;

for (let num of arr3) {
    if (num % 2 === 0) {
        evenCount++;
    }
}

console.log("Total Even Numbers =", evenCount);

// Output:
// Total Even Numbers = 4