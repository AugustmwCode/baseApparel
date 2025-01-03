const form = document.getElementById('submitEmail');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', (event) => {
    errorMessage.textContent = '';

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email';
        return;
    }

    alert('Thank you for your submission!');
    form.reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}