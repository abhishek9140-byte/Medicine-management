

// Function to handle sign-in
function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    const role = document.getElementById('signin-role').value;

    // Simple authentication logic (for demonstration purposes)
    if (role === 'admin' && username === 'admin' && password === '123') {
        // Redirect to admin page
        window.location.href = 'admin.html'; // Replace with your actual admin page
    } else if (role === 'client' && username === 'client' && password === '123') {
        // Redirect to client page
        window.location.href = 'client.html'; // Replace with your actual client page
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to handle sign-up
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission

    const role = document.getElementById('signup-role').value;
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const dob = document.getElementById('signup-dob').value;
    const password = document.getElementById('signup-password').value;

    // Basic validation (you can expand this as needed)
    if (!role || !username || !email || !dob || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // For demonstration, just log the sign-up data
    console.log(`Sign Up: ${role}, ${username}, ${email}, ${dob}, ${password}`);
    
    // Here you would typically send the data to your server
    alert('Sign up successful! You can now sign in.');
}

// Function to load medicines dynamically (example)
function loadMedicines() {
    const medicineList = document.getElementById('medicine-list');
    const medicines = [
        { name: 'Medicine A', description: 'Description for Medicine A' },
        { name: 'Medicine B', description: 'Description for Medicine B' },
        { name: 'Medicine C', description: 'Description for Medicine C' },
        { name: 'Medicine D', description: 'Description for Medicine D' },
        { name: 'Medicine E', description: 'Description for Medicine E' },
        { name: 'Medicine F', description: 'Description for Medicine F' }
    ];

    medicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.innerHTML = `<h3>${medicine.name}</h3><p>${medicine.description}</p>`;
        medicineList.appendChild(medicineItem);
    });
}

// Call loadMedicines on page load
document.addEventListener('DOMContentLoaded', loadMedicines);