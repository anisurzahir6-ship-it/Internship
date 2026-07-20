// =========================
// Part 4: Arrays
// =========================

// Q1
// Question:
// Create an array containing a string, number, boolean, null, and undefined.

let arr1 = ["Alex", 20, true, null, undefined];

console.log(arr1);

// Output:
// [ 'Alex', 20, true, null, undefined ]



// Q2
// Question:
// Print the first element, last element, and length of the array.

console.log("First Element =", arr1[0]);
console.log("Last Element =", arr1[arr1.length - 1]);
console.log("Length =", arr1.length);

// Output:
// First Element = Alex
// Last Element = undefined
// Length = 5



// Q3
// Question:
// Add two elements using push().

arr1.push("JavaScript");
arr1.push(100);

console.log(arr1);

// Output:
// [ 'Alex', 20, true, null, undefined, 'JavaScript', 100 ]



// Q4
// Question:
// Remove the last element using pop().

arr1.pop();

console.log(arr1);

// Output:
// [ 'Alex', 20, true, null, undefined, 'JavaScript' ]



// Q5
// Question:
// Replace the third element with your city name.

arr1[2] = "Delhi";

console.log(arr1);

// Output:
// [ 'Alex', 20, 'Delhi', null, undefined, 'JavaScript' ]



// Q6
// Question:
// Create the array [10, 20, 30, 40, 50] and perform the following:
// - Print the length
// - Add 60
// - Remove the last element
// - Change 30 to 100
// - Print the final array

let arr2 = [10, 20, 30, 40, 50];

console.log("Length =", arr2.length);

// Output:
// Length = 5

arr2.push(60);

console.log("After Push =", arr2);

// Output:
// After Push = [10, 20, 30, 40, 50, 60]

arr2.pop();

console.log("After Pop =", arr2);

// Output:
// After Pop = [10, 20, 30, 40, 50]

arr2[2] = 100;

console.log("Final Array =", arr2);

// Output:
// Final Array = [10, 20, 100, 40, 50]



// Q7
// Question:
// Create a nested array:
// let data = [1, 2, [3, 4, 5], 6]
// Print 3, 5, and the length of the nested array.

let data = [1, 2, [3, 4, 5], 6];

console.log(data[2][0]);
console.log(data[2][2]);
console.log(data[2].length);

// Output:
// 3
// 5
// 3