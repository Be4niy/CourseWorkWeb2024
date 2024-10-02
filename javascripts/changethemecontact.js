const body = document.body;
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});