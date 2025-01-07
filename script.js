
// script.js

// Function to handle the sign-in logic
function handleSignIn(event) {
    event.preventDefault();

    // Get the form elements
    const role = document.querySelector('select[name="role"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Hardcoded credentials
    const adminCredentials = { username: "admin", password: "123" };
    const userCredentials = { username: "user", password: "123" };

    // Check if the input matches admin credentials
    if (role === "admin" && username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "admin.html"; // Redirect to admin page
    }
    // Check if the input matches user credentials
    else if (role === "client" && username === userCredentials.username && password === userCredentials.password) {
        window.location.href = "user.html"; // Redirect to user page
    }
    else {
        alert("Invalid credentials. Please try again.");
    }
}

// Add event listener to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', handleSignIn);
    }
});
