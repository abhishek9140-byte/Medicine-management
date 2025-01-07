// user.js

// Sample medicines (hardcoded)
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

    medicines.forEach((medicine, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${medicine.name}</td>
            <td>${medicine.quantity}</td>
            <td>${medicine.status}</td>
            <td><button onclick="buyMedicine(${index})" ${medicine.quantity <= 0 ? 'disabled' : ''}>Buy</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle buying medicine
function buyMedicine(index) {
    const medicine = medicines[index];

    if (medicine.quantity > 0) {
        medicine.quantity--;
        alert(`You have bought 1 ${medicine.name}. Remaining quantity: ${medicine.quantity}`);
        
        // Refresh the medicine table to show the updated quantity
        updateMedicineTable();
    } else {
        alert(`${medicine.name} is out of stock.`);
    }
}

// Initialize the table on page load
document.addEventListener('DOMContentLoaded', updateMedicineTable);
