// Select elements
const form = document.getElementById('accessForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const zipCodeInput = document.getElementById('zipCode');
const nameWarning = document.getElementById('nameWarning');
const zipWarning = document.getElementById('zipWarning');
const secretMessage = document.getElementById('secretMessage');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    // Combine first and last names into a single string
    const fullName = firstNameInput.value.trim() + " " + lastNameInput.value.trim();
    
    // Check if the full name length is less than or equal to 20 characters
    if (fullName.length > 20) {
        nameWarning.style.display = 'block'; // Show the warning message
        event.preventDefault(); // Prevent form submission
    } else {
        nameWarning.style.display = 'none'; // Hide the warning message
    }

    // Validate the zip code (must be 5 digits)
    const zipCode = zipCodeInput.value.trim();
    if (!/^\d{5}$/.test(zipCode)) {
        zipWarning.style.display = 'block'; // Show the warning message
        event.preventDefault(); // Prevent form submission
    } else {
        zipWarning.style.display = 'none'; // Hide the warning message
    }

    // If all validations pass, display the secret message
    if (fullName.length <= 20 && /^\d{5}$/.test(zipCode)) {
        secretMessage.style.display = 'block';
    }
});
