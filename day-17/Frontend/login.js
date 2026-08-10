const registrationForm = document.getElementById('registerForm');

if (registrationForm) {
    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fullName = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const phoneNumber = document.getElementById("registerPhone").value;

        const userData = {
            fullName,
            email,
            password,
            phoneNumber
        };

        try {
            const response = await fetch("http://localhost:8000/api/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const res = await response.json();

            if (response.ok) {
                Toastify({
                    text: res.message,
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            } else {
                Toastify({
                    text: res.message,
                    duration: 3000,
                    gravity: "top",
                    position: "left",
                    style: {
                        background: "linear-gradient(to right, #b00000, #460404)",
                    }
                }).showToast();
            }

        } catch (error) {
            console.error("Registration error:", error);
        }
    });
}

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const userData = {
            email,
            password
        };

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            console.log("LOGIN RESPONSE:", data);

            if (response.ok) {

                const token = data.token || (data.user && data.user.token);

                if (!token) {
                    alert("Token not received from backend");
                    return;
                }

                localStorage.setItem("token", token);

                Toastify({
                    text: "Login successful",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();

                // ✅ Delay ensures toast shows + redirect works
                setTimeout(() => {
                    window.location.href = "./user.html";
                }, 1000);

            } else {
                Toastify({
                    text: data.message,
                    duration: 3000,
                    gravity: "top",
                    position: "left",
                    style: {
                        background: "linear-gradient(to right, #b00000, #460404)",
                    }
                }).showToast();
            }

        } catch (error) {
            console.error("Login error:", error);
        }
    });
}