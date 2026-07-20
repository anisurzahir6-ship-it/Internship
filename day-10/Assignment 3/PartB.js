// ===============================
// Part B: Strings
// ===============================

// Q1. Print all vowels from the string "JavaScript is awesome"

let str1 = "JavaScript is awesome";
let vowels = "aeiouAEIOU";

console.log("Vowels:");

for (let i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i])) {
        console.log(str1[i]);
    }
}

// Output:
// Vowels:
// a
// a
// i
// i
// a
// e
// o
// e



// Q2. Count the number of vowels in "Masai School"

let str2 = "Masai School";
let count = 0;

for (let i = 0; i < str2.length; i++) {
    if (vowels.includes(str2[i])) {
        count++;
    }
}

console.log("Total Vowels =", count);

// Output:
// Total Vowels = 5



// Q3. Print every character of "Full Stack Development" using a loop

let str3 = "Full Stack Development";

console.log("Characters:");

for (let i = 0; i < str3.length; i++) {
    console.log(str3[i]);
}

// Output:
// F
// u
// l
// l
//
// S
// t
// a
// c
// k
//
// D
// e
// v
// e
// l
// o
// p
// m
// e
// n
// t



// Q4. Count the number of spaces in "We are learning JavaScript"

let str4 = "We are learning JavaScript";
let spaces = 0;

for (let i = 0; i < str4.length; i++) {
    if (str4[i] === " ") {
        spaces++;
    }
}

console.log("Total Spaces =", spaces);

// Output:
// Total Spaces = 3



// Q5. Reverse the string "Hello"

let str5 = "Hello";
let reverse = "";

for (let i = str5.length - 1; i >= 0; i--) {
    reverse += str5[i];
}

console.log("Reversed String =", reverse);

// Output:
// Reversed String = olleH