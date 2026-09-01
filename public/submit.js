// Check if user is logged in
if (!localStorage.getItem("token")) {
    window.location.href = "index.html";
}

const form = document.querySelector(".complaint-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input[type="text"]');
    const category = form.querySelector("select").value;
    const description = form.querySelector("textarea").value;
    const photo = form.querySelector('input[type="file"]').files[0];

    const Title = inputs[0].value;
    const Location = inputs[1].value;
    const Category = category;
    const Description = description;

    if (!Title || Category === "Select category" || !Location || !Description || !photo) {
        alert("Please fill all the fields.");
        return;
    }

    const formData = new FormData();

    formData.append("Title", Title);
    formData.append("Description", Description);
    formData.append("Category", Category);
    formData.append("Location", Location);
    formData.append("Photo", photo);

    // Temporary value until Priority is added to your HTML
    formData.append("Priority", "Medium");

    try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/complaints", {
            method: "POST",
            headers: {
                "Authorization": token
            },
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Complaint submitted successfully!");
            form.reset();
            window.location.href = "home.html";
        } else {
            alert(data.message || "Complaint submission failed.");
        }

    } catch (error) {
        console.error(error);
        alert("Server error.");
    }
});