// admin.js

// Sample medicines (initial list)
const medicines = [
    { name: "Paracetamol", quantity: 10, status: "In Stock" },
    { name: "Aspirin", quantity: 5, status: "In Stock" },
    { name: "Ibuprofen", quantity: 0, status: "Out of Stock" },
    { name: "Cough Syrup", quantity: 3, status: "In Stock" },
    { name: "Antibiotics", quantity: 8, status: "In Stock" }
];

// Function to update the medicine table
function updateMedicineTable() {
    const tableBody = document.getElementById('medicine-table-body');
    tableBody.innerHTML = ''; // Clear existing rows

    medicines.forEach(medicine => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${medicine.name}</td>
            <td>${medicine.quantity}</td>
            <td>${medicine.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle adding a new medicine
document.getElementById('add-medicine-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('medicine-name').value;
    const quantity = document.getElementById('medicine-quantity').value;
    const status = document.getElementById('medicine-status').value;

    // Add new medicine to the list
    medicines.push({ name, quantity: parseInt(quantity), status });

    // Update the table to reflect the added medicine
    updateMedicineTable();

    // Clear the form fields
    document.getElementById('add-medicine-form').reset();
});

// Initialize the table on page load
document.addEventListener('DOMContentLoaded', updateMedicineTable);
