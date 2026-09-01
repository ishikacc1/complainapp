const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful! Please login.");
            window.location.href = "index.html";
        } else {
            alert(data.message || "Registration failed");
        }

    } catch (error) {
        console.log("registration error:", error);
        alert("Something went wrong. Try again.");
    }
});
