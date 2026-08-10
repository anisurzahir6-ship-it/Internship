// 🔐 Redirect if not logged in
if (!localStorage.getItem("token")) {
    window.location.href = "./login.html";
}

// 👤 Fetch user data
const fetchUser = async () => {
    try {
        const token = localStorage.getItem("token");

        // ✅ Safety check
        if (!token) {
            window.location.href = "./login.html";
            return;
        }

        const response = await fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`   // ✅ CORRECT FORMAT
            }
        });

        const userData = await response.json();

        const userProfileDiv = document.getElementById("userProfile");

        if (response.ok) {
            userProfileDiv.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${userData.user.fullName}</p>
                <p><strong>Email:</strong> ${userData.user.email}</p>
            `;
        } else {
            userProfileDiv.innerHTML = `
                <h2>Error</h2>
                <p>${userData.message}</p>
            `;
        }

    } catch (error) {
        console.log("Fetch error:", error.message);
    }
};

// 🚀 Run function
fetchUser();