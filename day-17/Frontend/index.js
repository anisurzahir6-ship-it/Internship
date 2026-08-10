const fetchData = async () => {

    const res = await fetch("https://internship-8ed2.onrender.com/api/users", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });

    const response = await res.json();

    renderData(response.users);   // ✅ FIX
}

function renderData(data) {

    const parent = document.getElementById("container");
    parent.innerHTML = ""; // clear old data

    data.forEach((el) => {

        const childDiv = document.createElement("div");
        childDiv.style.border = "1px solid green";

        const name = document.createElement("p");
        name.innerText = `Name:- ${el.fullName}`;   // ✅ FIX

        const email = document.createElement("p");
        email.innerText = `Email:- ${el.email}`;   // ✅ FIX

        const phone = document.createElement("p");
        phone.innerText = `Phone:- ${el.phoneNumber}`;   // ✅ FIX

        childDiv.append(name, email, phone);
        parent.append(childDiv);
    });
}

fetchData();