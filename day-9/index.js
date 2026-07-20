{
let obj = {
    name: "Suraj",
    uni: "ADTU",
    course: "Btech",
    year: 3,
    isAlumni: false,

    sub: ["FS", "AI", "DL", "ML"],

    hobbies: {
        games: ["Cricket", "Football"],
        listening: "Starboy",

        test: {
            test1: {
                test2: {
                    test3: {
                        test4: {
                            test5: {
                                100: "RS"
                            }
                        }
                    }
                }
            }
        }
    },

    67: "test"
};

let firstValue = obj["name"];
console.log(firstValue);

// Update object
obj["course"] = "Btech CSE";
console.log(obj);

// Delete key
const deletedKey = delete obj["uni"];
console.log(deletedKey);
console.log(obj);

// Access hobbies
console.log(obj.hobbies);


// Add new property
obj["isMarried"] = false;
console.log(obj);

// Access nested value
console.log(obj.hobbies.test.test1.test2.test3.test4.test5[100]);
}

// Loops
{
let num = 10;
for (let i = 0; i < num; i++) {
    console.log(i);
}
}

{
let std = ["Nishita", "Suraj", "Rohit", "Rohini", "Navi", "Navya", "Arshita"];

// Print every character and then the full name
for (let i = 0; i < std.length; i++) {
    for (let j = 0; j < std[i].length; j++) {
        console.log(std[i][j]);
    }
    console.log(std[i]);
}

// First student's characters
let firstStudent = std[0];

for (let i = 0; i < firstStudent.length; i++) {
    console.log(firstStudent[i]);
}
}
// Print even-index alphabets
{
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 === 0) {
        console.log("This alphabet",alphabet[i],"on even index",i);
    }else{
        console.log("This alphabet",alphabet[i],"on odd index",i);
    }
}
}