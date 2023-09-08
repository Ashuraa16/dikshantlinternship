const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const termsCheckbox = document.getElementById('agree-terms');
const showPasswordIcon = document.getElementById('show-password');
const showConfirmPasswordIcon = document.getElementById('show-confirm-password');
const toggleReferralInput = document.getElementById('toggle-referral-input');
const referralCodeInput = document.getElementById('referral-code');


nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
mobileInput.addEventListener('blur', validateMobile);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
termsCheckbox.addEventListener('change', validateTerms);

function validateName() {
    clearError(nameInput);
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Name is required.');
    }
}

function validateEmail() {
    clearError(emailInput);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, 'Email must be correctly formatted.');
    }
}

function validateMobile() {
    clearError(mobileInput);
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileInput.value.trim())) {
        setError(mobileInput, 'Mobile number must be 10 digits.');
    }
}

function validatePassword() {
    clearError(passwordInput);
    if (passwordInput.value.length < 6) {
        setError(passwordInput, 'Password must be at least 6 characters.');
    }
}

function validateConfirmPassword() {
    clearError(confirmPasswordInput);
    if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Passwords do not match.');
    }
}

function validateTerms() {
    clearError(termsCheckbox);
    if (!termsCheckbox.checked) {
        setError(termsCheckbox, 'You must accept the terms of service.');
    }
}

function setError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add('valid');
    input.classList.add('error');
    errorElement.innerText = message;
}

function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove('error');
    errorElement.innerText = '';
}

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const showPasswordField = document.getElementById(`show-${fieldId}`);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordField.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordField.type = 'password';
        showPasswordField.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

let isReferralInputVisible = false;

toggleReferralInput.addEventListener('click', () => {
    if (isReferralInputVisible) {
        referralCodeInput.style.display = 'none'; 
        toggleReferralInput.innerHTML = '<i class="fas fa-plus-circle"></i>'; 
    } else {
        referralCodeInput.style.display = 'block'; 
        toggleReferralInput.innerHTML = '<i class="fas fa-minus-circle"></i>'; 
    }
    isReferralInputVisible = !isReferralInputVisible; 
});