document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('participant-registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const membershipType = document.getElementById('membershipType').value;

        const participantData = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            membershipType: membershipType
        };

        fetch('http://localhost:3000/api/participants', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(participantData) 
        })
        .then(response => response.json()) 
        .then(data => {
            console.log('Success:', data); 
        })
        .catch((error) => {
            console.error('Error:', error); 
        });
    });
})