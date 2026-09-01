/// 1
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try{
        const response = await fetch("/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        if (response.ok){
            alert("login successful");
            if (data.token){
                localStorage.setItem("token", data.token);
            }
            window.location.href = "home.html";
        } else{
            alert(data.message || "login failed")
        }
    } catch (error){
        console.log("login error:",error);
        alert("something went wrong try again")
    }
});

