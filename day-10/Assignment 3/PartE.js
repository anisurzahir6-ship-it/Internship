// ===============================
// Part E: Objects and for...in
// ===============================

// Q1. Print all keys from a student object using for...in.

let student = {
    name: "Alex",
    age: 20,
    university: "ADTU",
    course: "BCA"
};

console.log("Object Keys:");

for (let key in student) {
    console.log(key);
}

// Output:
// name
// age
// university
// course



// Q2. Print all values from the object.

console.log("Object Values:");

for (let key in student) {
    console.log(student[key]);
}

// Output:
// Alex
// 20
// ADTU
// BCA



// Q3. Find the subject with the minimum marks from a marks object.

let marks = {
    English: 75,
    Mathematics: 90,
    Science: 65,
    SocialScience: 80
};

let minSubject = "";
let minMarks = Infinity;

for (let subject in marks) {
    if (marks[subject] < minMarks) {
        minMarks = marks[subject];
        minSubject = subject;
    }
}

console.log("Subject with Minimum Marks:", minSubject);
console.log("Marks:", minMarks);

// Output:
// Subject with Minimum Marks: Science
// Marks: 65



// Q4. Count the total number of properties in an object.

let employee = {
    id: 101,
    name: "John",
    department: "IT",
    salary: 50000,
    city: "Delhi"
};

let count = 0;

for (let key in employee) {
    count++;
}

console.log("Total Properties =", count);

// Output:
// Total Properties = 5



// Q5. Predict the output of iterating through an object using for...in.

let person = {
    firstName: "Alimul",
    lastName: "Awal",
    age: 26
};

for (let key in person) {
    console.log(key + ":", person[key]);
}

// Output:
// firstName: Alimul
// lastName: Awal
// age: 26