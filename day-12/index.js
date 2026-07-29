// //console.log(window.alert("Hello World!"));
// 
// 
// const para = documnt.getElementById("para");
// 
// para.innerText = "I am a paragraph from js file!";
// 
// para.style.border = "2px solid red";
// para.style.backgroundColor = "lightblue";
// para.style.color = "black";
// 
// const btnDiv = document.getElementById("btn");
// const btn = document.createElement("button");
// btn.innerText = "Click me!";
// btn.style.padding = "10px 20px";
// btn.style.border = "none";
// btn.style.backgroundColor = "greenYellow";
// btn.style.color = "white";
// btn.style.borderRadius = "5px";
// btnDiv.append(btn);
// 
// //const myFun=()=>{
// //console.log("Output after clicking the button");
// //}
// 
// btn.addEventListener("click",() =>{
//     console.log("Click inside the event listener");
// });


// let form = document.getElementById("form");
// let btn = document.getElementById("btn");
// 
// btn.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
// 
//     let fullName = document.getElementById("FullName").value;
//     let email = document.getElementById("Email").value;
//     let password = document.getElementById("password").value;
// 
//     let obj = {
//         fullName: fullName,
//         email: email,
//         password: password
//     };
// 
//     console.log(obj);
// 
// })


//console.log(this.window) //window object-undefined

obj = {
    fullName: "Praljyoti",
    uni: "ADTU",
    myFun: () => {
        console.log("I am a function inside an object");
       // console.log(this)  
    }
}

obj.myFun();




