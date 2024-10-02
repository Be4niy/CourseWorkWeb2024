document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        saveToLocalStorage();
        this.reset();
    }
});

function validateForm() {
    let isValid = true;
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    if (!fullName.value.trim()) {
        showError('fullNameError', 'Full name is required');
        isValid = false;
    } else {
        clearError('fullNameError');
    }

    if (!email.value.trim()) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('emailError');
    }

    if (!phone.value.trim()) {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    } else {
        clearError('phoneError');
    }

    if (!subject.value.trim()) {
        showError('subjectError', 'Subject is required');
        isValid = false;
    } else {
        clearError('subjectError');
    }

    if (!message.value.trim()) {
        showError('messageError', 'Message is required');
        isValid = false;
    } else {
        clearError('messageError');
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearError(id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = '';
}

function saveToLocalStorage() {
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    localStorage.setItem('appointmentData', JSON.stringify(formData));
    alert('Appointment data saved successfully!');
}