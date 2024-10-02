const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = 'Dark Theme';
    } else {
        themeToggle.textContent = 'Light Theme';
    }
});

document.getElementById('languageSelector').addEventListener('change', function() {
    const lang = this.value;
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
});