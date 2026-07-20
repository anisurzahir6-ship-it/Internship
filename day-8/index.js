//console.log("Hello, World!");
let name = "John Doe";
console.log(name);

let num = 20;
console.log( typeof num);

let num1 = 20.5;
let num2 = 3.14;
console.log(num1 + num2);  

let num3 = 3.14;
console.log( typeof num3);

let booleanValue = true;
console.log( typeof booleanValue);

let numb = 10;
let numb2 = 12;
console.log(numb != numb2); // true

let num11 = 10;
let num112 = 12;

if (num11 < num112) {
    console.log("I won...");
}else if (num11 > num112) {
    console.log("I lost...");
}else{
    console.log("It's a tie...");
}

// AND (&&)
if (age >= 18 && age <= 60) {
    console.log("Eligible");
}

// OR (||)
if (marks >= 90 || sportsQuota == true) {
    console.log("Selected");
}

// NOT (!)
if (!isLoggedIn) {
    console.log("Please Login");
}

let arr = [1, "Name", 3.6, true, false, null, undefined, [2, 4, 5]];

let lastIndex = arr.length - 1;

console.log(lastIndex);
console.log(arr.length);

// Add an element at the end
arr.push(6);
console.log(arr);

// Remove the last element
arr.pop();
console.log(arr);

// Access the last element
console.log(arr[arr.length - 1]);

// Update an element using its index
arr[3] = 18;
console.log(arr);

// Replace the first element
arr[0] = "Myname Is name";
console.log(arr);