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

        console.log('Participant Data:', participantData);

    });
});