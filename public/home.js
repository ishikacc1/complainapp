// Check if user is logged in
if (!localStorage.getItem("token")) {
    window.location.href = "index.html";
}

const complaintContainer = document.querySelector(".home");

async function loadComplaints() {
    try {
        const response = await fetch("/api/complaints");

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Failed to load complaints.");
            return;
        }

        document.querySelectorAll(".complaint").forEach((element) => {
            element.remove();
        });

        data.forEach((complaint) => {
            const complaintDiv = document.createElement("div");

            complaintDiv.classList.add("complaint");

            complaintDiv.innerHTML = `
                <h3>${complaint.Title}</h3>

                <p>
                    <strong>Complaint ID:</strong>
                    ${complaint._id}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${complaint.Category}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${complaint.Location}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${complaint.Description}
                </p>

                <p>
                    <strong>Priority:</strong>
                    ${complaint.Priority}
                </p>
            `;

            complaintContainer.appendChild(complaintDiv);
        });

    } catch (error) {
        console.error(error);
        alert("Could not connect to server.");
    }
}

loadComplaints();