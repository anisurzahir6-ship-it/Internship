// =========================
// Part 5: Output Prediction
// =========================

// Q1
// Question:
// Predict the output:
//
// let x = 10;
// let y = "10";
// console.log(x == y);
// console.log(x === y);

let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);

// Output:
// true
// false



// Q2
// Question:
// Predict the output.
//
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// console.log(arr);

let arr3 = [1, 2, 3];

arr3.push(4);
arr3.pop();

console.log(arr3);

// Output:
// [1, 2, 3]



// Q3
// Question:
// Predict the output.
//
// let arr = ["A", "B", "C"];
// arr[1] = "Z";
// console.log(arr);

let arr4 = ["A", "B", "C"];

arr4[1] = "Z";

console.log(arr4);

// Output:
// ["A", "Z", "C"]



// =========================
// Challenge Questions
// =========================

// Q1
// Question:
// Create an array of 10 elements and replace every even index with "JavaScript".

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        array[i] = "JavaScript";
    }
}

console.log(array);

// Output:
// [
//   "JavaScript", 2,
//   "JavaScript", 4,
//   "JavaScript", 6,
//   "JavaScript", 8,
//   "JavaScript", 10
// ]



// Q2
// Question:
// Create three variables: name, age, and city,
// then print a complete sentence using them.

const myName = "Alex";
const myAge = 19;
const city = "Delhi";

console.log(`Hello, I'm ${myName}. I am ${myAge} years old and I live in ${city}.`);

// Output:
// Hello, I'm Alex. I am 19 years old and I live in Delhi.



// Q3
// Question:
// Create an array with mixed data types and count
// the number of elements without using length.

let mixed = ["Alex", 20, true, null, undefined];

let count = 0;

for (let item of mixed) {
    count++;
}

console.log("Total elements =", count);

// Output:
// Total elements = 5