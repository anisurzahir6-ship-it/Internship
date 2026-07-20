let arr =[1,2,3,4,5,6,7,8,9];

for(let num of arr){
    console.log(num);
}

let arr1=["Anisur", "Zahir", "Rana", "Sakib", "Rifat"];
for(let name of arr1){
    if(name === "Rana"){
        console.log("He is from ADTU");
    }else{
        console.log("All are from Amity");
    }
    console.log(name);
}

// for in loop
{let obj = {
    isAlumni: false,

    sub: ["FS", "AI", "DL", "ML"],

    hobbies: {
        games: ["Cricket", "Football"],
        listening: "Starboy",
    },

    67: "test"
};

// find which subject has maximum marks along with subject name

let obj1 = {
    maths:56,
    physics: 90,
    chemistry: 80,
    biology: 70
};

let max = 0;
let subject = "";

for (let i in obj1) {
    if(obj1[i] > max){
        max = obj1[i];
        subject = i;
    }
}
console.log(subject,max);
}



//functions

{function myFunction(a, b, c){  //parameters
    let out = a+b+c;
    console.log(out);
}

myFunction(10,20,30); // invoking the function
myFunction(100,200,300);

myFunction(1000,2000,3000);

myFunction(10000,20000,30000); //arguments
}



//ES6, EcmaScript 6, commonJS

//let,contst, arrow function

//arrow function

{const myFunction1 = (a, b, c) => {
    let out = a+b+c;
    console.log(out);
}
myFunction1(10,20,30);
}


