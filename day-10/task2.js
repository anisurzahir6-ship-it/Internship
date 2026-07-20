let str = "We are in full stack batch";
let vowels = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        vowels += ch;
    }
}

console.log(vowels);