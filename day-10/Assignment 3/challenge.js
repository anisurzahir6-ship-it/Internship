// ===============================
// Challenge Questions
// ===============================

// Q1. Find the second largest number in an array.

let arr = [23, 56, 89, 12, 100, 45];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Second Largest Number =", secondLargest);

// Output:
// Second Largest Number = 89



// Q2. Count vowels and consonants in the string "Programming".

let str = "Programming";
let vowels = "aeiouAEIOU";

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

console.log("Vowels =", vowelCount);
console.log("Consonants =", consonantCount);

// Output:
// Vowels = 3
// Consonants = 8



// Q3. Create a student object containing name, age, university,
// subjects and hobbies, then print all information.

let student = {
    name: "Anisur Zahir",
    age: 26,
    university: "Assam Down Town University",
    subjects: ["JavaScript", "HTML", "CSS"],
    hobbies: ["Cricket", "Movies", "Coding"]
};

console.log("Student Details:");

for (let key in student) {
    console.log(key + ":", student[key]);
}

// Output:
// name: Anisur Zahir
// age: 26
// university: Assam Down Town University
// subjects: [ 'JavaScript', 'HTML', 'CSS' ]
// hobbies: [ 'Cricket', 'Movies', 'Coding' ]



// Q4. Write a function that checks whether a number is prime or not.

function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let number = 17;

if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is Not a Prime Number");
}

// Output:
// 17 is a Prime Number



// Q5. Write a function that reverses a string.

function reverseString(text) {

    let reverse = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }

    return reverse;
}

console.log(reverseString("JavaScript"));

// Output:
// tpircSavaJ



// Q6. Create an array of students and print only those whose names start with 'A'.

let students = [
    "Anisur",
    "Rahul",
    "Aman",
    "Riya",
    "Akash",
    "Priya"
];

console.log("Students whose names start with A:");

for (let i = 0; i < students.length; i++) {
    if (students[i].startsWith("A")) {
        console.log(students[i]);
    }
}

// Output:
// Anisur
// Aman
// Akash