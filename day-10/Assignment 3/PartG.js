// ===============================
// Part G: Variables (let, const, var)
// ===============================

// Q1. Predict the output of using a variable before declaration with var.

console.log(a);

var a = 10;

// Output:
// undefined



// Q2. Predict the output of using a variable before declaration with let.

// console.log(b);

let b = 20;

// Output:
// ReferenceError: Cannot access 'b' before initialization

// (Keep the console.log commented, otherwise the program will stop.)



// Q3. Predict the output when modifying a const variable.

const PI = 3.14;

// PI = 3.14159;

// Output:
// TypeError: Assignment to constant variable.

// (Keep the assignment commented, otherwise the program will stop.)



// Q4. Write the difference between var, let and const.

console.log("Difference Between var, let and const");

console.log("var:");
console.log("- Function scoped");
console.log("- Can be redeclared");
console.log("- Can be reassigned");
console.log("- Hoisted with undefined");

console.log("");

console.log("let:");
console.log("- Block scoped");
console.log("- Cannot be redeclared in the same scope");
console.log("- Can be reassigned");
console.log("- Hoisted but remains in Temporal Dead Zone");

console.log("");

console.log("const:");
console.log("- Block scoped");
console.log("- Cannot be redeclared");
console.log("- Cannot be reassigned");
console.log("- Value must be assigned during declaration");

// Output:
//
// Difference Between var, let and const
//
// var:
// - Function scoped
// - Can be redeclared
// - Can be reassigned
// - Hoisted with undefined
//
// let:
// - Block scoped
// - Cannot be redeclared in the same scope
// - Can be reassigned
// - Hoisted but remains in Temporal Dead Zone
//
// const:
// - Block scoped
// - Cannot be redeclared
// - Cannot be reassigned
// - Value must be assigned during declaration