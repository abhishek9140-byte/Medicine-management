// script.js

// Function to handle sign-in
function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simple authentication logic (for demonstration purposes)
    if (role === 'admin') {
        // Redirect to admin page
        window.location.href = 'admin.html'; // Replace with your actual admin page
    } else if (role === 'client') {
        // Redirect to client page
        window.location.href = 'client.html'; // Replace with your actual client page
    } else {
        alert('Please select a valid role.');
    }
}

// Function to load medicines dynamically (example)
function loadMedicines() {
    const medicineList = document.getElementById('medicine-list');
    const medicines = [
        { name: 'Medicine A', description: 'Description for Medicine A' },
        { name: 'Medicine B', description: 'Description for Medicine B' },
        { name: 'Medicine C', description: 'Description for Medicine C' }
    ];

    medicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.innerHTML = `<h3>${medicine.name}</h3><p>${medicine.description}</p>`;
        medicineList.appendChild(medicineItem);
    });
}

// Call loadMedicines on page load
document.addEventListener('DOMContentLoaded', loadMedicines);