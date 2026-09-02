const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);

            alert("Login successful!");

            window.location.href = "/home.html";
        } else {
            alert(data.message || "Login failed");
        }

    } catch (error) {
        console.log("Login error:", error);
        alert("Something went wrong. Try again.");
    }
});