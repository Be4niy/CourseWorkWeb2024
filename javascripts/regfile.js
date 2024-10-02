const startButton = document.getElementById('startButton');
const registrationForm = document.getElementById('registrationForm');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const adminSection = document.getElementById('adminSection');
const showUsersButton = document.getElementById('showUsersButton');
const usersList = document.getElementById('users');
const logoutButton = document.getElementById('logoutButton');
const externalLinkButton = document.getElementById('externalLinkButton');
const closeButton = document.getElementById('closeButton');

const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const passwordChoice = document.getElementById('passwordChoice');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameInput = document.getElementById('name');
const nicknameInput = document.getElementById('nickname');
const agreeInput = document.getElementById('agree');
const isAdminInput = document.getElementById('isAdmin');
const showPasswordsInput = document.getElementById('showPasswords');

const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const passwordError = document.getElementById('passwordError');
const nameError = document.getElementById('nameError');
const nicknameError = document.getElementById('nicknameError');
const agreeError = document.getElementById('agreeError');

const manualPasswordFields = document.getElementById('manualPasswordFields');

let nicknameAttempts = 0;
const maxNicknameAttempts = 5;
let registeredUsers = [];

// Проверка авторизации
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        adminSection.classList.remove('hidden');
        loginButton.classList.add('hidden');
    } else {
        adminSection.classList.add('hidden');
        loginButton.classList.remove('hidden');
    }
}
startButton.addEventListener('click', () => {
    registrationForm.classList.remove('hidden');
    startButton.classList.add('hidden');
    loginButton.classList.add('hidden');
});


closeButton.addEventListener('click', () => {
    registrationForm.classList.add('hidden');
    startButton.classList.remove('hidden');
});


passwordChoice.addEventListener('change', () => {
    if (passwordChoice.value === 'manual') {
        manualPasswordFields.classList.remove('hidden');
    } else {
        manualPasswordFields.classList.add('hidden');
    }
});


showPasswordsInput.addEventListener('change', () => {
    const type = showPasswordsInput.checked ? 'text' : 'password';
    if (passwordInput) passwordInput.type = type;
    if (confirmPasswordInput) confirmPasswordInput.type = type;
});


function generateNickname() {
    const randomNickname = `user${Math.floor(Math.random() * 10000)}`;
    nicknameInput.value = randomNickname;
}

generateNickname();
document.getElementById('generateNickname').addEventListener('click', () => {
    if (nicknameAttempts < maxNicknameAttempts) {
        generateNickname();
        nicknameAttempts++;
    } else {
        nicknameInput.readOnly = false;
    }
});


function validateInputs() {
    let valid = true;

    
    const phonePattern = /^\+375\d{9}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.classList.remove('hidden');
        valid = false;
    } else {
        phoneError.classList.add('hidden');
    }

  
    if (!emailInput.value.includes('@')) {
        emailError.classList.remove('hidden');
        valid = false;
    } else {
        emailError.classList.add('hidden');
    }

   
    const currentDate = new Date();
    const birthDate = new Date(birthdateInput.value);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 16 || isNaN(age)) {
        birthdateError.classList.remove('hidden');
        valid = false;
    } else {
        birthdateError.classList.add('hidden');
    }

   
    if (passwordChoice.value === 'manual') {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
        if (!passwordPattern.test(passwordInput.value) || passwordInput.value !== confirmPasswordInput.value) {
            passwordError.classList.remove('hidden');
            valid = false;
        } else {
            passwordError.classList.add('hidden');
        }
    }

   
    if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden');
        valid = false;
    } else {
        nameError.classList.add('hidden');
    }

 
    if (!agreeInput.checked) {
        agreeError.classList.remove('hidden');
        valid = false;
    } else {
        agreeError.classList.add('hidden');
    }

    registerButton.disabled = !valid;
}

phoneInput.addEventListener('input', validateInputs);
emailInput.addEventListener('input', validateInputs);
birthdateInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);
confirmPasswordInput.addEventListener('input', validateInputs);
nameInput.addEventListener('input', validateInputs);
agreeInput.addEventListener('change', validateInputs);


registerButton.addEventListener('click', () => {
    const user = {
        phone: phoneInput.value,
        email: emailInput.value,
        birthdate: birthdateInput.value,
        nickname: nicknameInput.value,
        role: isAdminInput.checked ? 'admin' : 'user',
        name: nameInput.value
    };

    registeredUsers.push(user);
    alert('Registration successful!');
    registrationForm.classList.add('hidden');
    loginButton.classList.remove('hidden');
    startButton.classList.remove('hidden');
});


loginButton.addEventListener('click', () => {
    const nickname = prompt('Enter your nickname:');
    const password = prompt('Enter your password:');

    const user = registeredUsers.find(u => u.nickname === nickname);
    if (user) {
        alert(`Welcome, ${user.name}!`);
        adminSection.classList.remove('hidden');
        if (user.role !== 'admin') {
            showUsersButton.classList.add('hidden');
        } else {
            showUsersButton.classList.remove('hidden');
        }
        loginButton.classList.add('hidden');
    } else {
        alert('Invalid credentials!');
    }
});


showUsersButton.addEventListener('click', () => {
    usersList.innerHTML = registeredUsers.map(u => `<li>${u.name} (${u.role})</li>`).join('');
    usersList.classList.toggle('hidden');
});


logoutButton.addEventListener('click', () => {
    adminSection.classList.add('hidden');
    startButton.classList.remove('hidden');
    loginButton.classList.remove('hidden');
});


externalLinkButton.addEventListener('click', () => {
    window.location.href = '../htmlll/Index2.html'; 
});
checkAuth();