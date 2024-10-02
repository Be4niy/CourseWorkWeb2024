document.addEventListener('DOMContentLoaded', function () {
    const bookConsultationBtn = document.getElementById('bookConsultation');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const getInTouchBtn = document.getElementById('getInTouch');
    const consultationModal = document.getElementById('consultationModal');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const contactModal = document.getElementById('contactModal');
    const closeBtns = document.querySelectorAll('.close');
    const consultationOptions = document.querySelectorAll('.consultation-option');
    const timeSlots = document.querySelector('.time-slots');
    const timeSlotOptions = document.querySelectorAll('.time-slot');
    const loginSubmit = document.getElementById('loginSubmit');
    const registerSubmit = document.getElementById('registerSubmit');
    const loginNotification = loginModal.querySelector('.notification');
    const registerNotification = registerModal.querySelector('.notification');
    const consultationNotification = consultationModal.querySelector('.notification');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        if (modal === consultationModal) {
            timeSlots.style.display = 'none';
            consultationNotification.style.display = 'none';
        }
        if (modal === loginModal) {
            loginNotification.style.display = 'none';
        }
        if (modal === registerModal) {
            registerNotification.style.display = 'none';
        }
    }

    // loginButton.addEventListener('click', () => openModal(loginModal));
    // registerButton.addEventListener('click', () => openModal(registerModal));
    bookConsultationBtn.addEventListener('click', () => openModal(consultationModal));
    getInTouchBtn.addEventListener('click', () => openModal(contactModal));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal'));
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });

    consultationOptions.forEach(option => {
        option.addEventListener('click', () => {
            timeSlots.style.display = 'flex';
        });
    });

    timeSlotOptions.forEach(slot => {
        slot.addEventListener('click', () => {
            consultationNotification.style.display = 'block';
            setTimeout(() => {
                closeModal(consultationModal);
            }, 3000);
        });
    });

    loginSubmit.addEventListener('click', () => {
        loginNotification.style.display = 'block';
        setTimeout(() => {
            closeModal(loginModal);
        }, 3000);
    });

    registerSubmit.addEventListener('click', () => {
        registerNotification.style.display = 'block';
        setTimeout(() => {
            closeModal(registerModal);
        }, 3000);
    });

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});