document.addEventListener('DOMContentLoaded', () => {
    const medicineList = document.getElementById('medicine-list');
    const medicines = [
        { name: 'Paracetamol', category: 'Pain Relief', price: '$5' },
        { name: 'Amoxicillin', category: 'Antibiotic', price: '$10' },
        { name: 'Metformin', category: 'Diabetes', price: '$15' },
    ];

    medicines.forEach(medicine => {
        const medicineDiv = document.createElement('div');
        medicineDiv.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>Category: ${medicine.category}</p>
            <p>Price: ${medicine.price}</p>
        `;
        medicineList.appendChild(medicineDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
