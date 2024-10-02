const themeToggleBtn = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeToggleBtn.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'assets/css/styleуу.css') {
        themeStylesheet.setAttribute('href', 'assets/css/darktheme.css');
    } else {
        themeStylesheet.setAttribute('href', 'assets/css/styleуу.css');
    }
});