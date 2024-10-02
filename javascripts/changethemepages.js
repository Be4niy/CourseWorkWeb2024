document.querySelectorAll('.card-link').forEach(item => {
    item.addEventListener('click', event => {
        const cardText = event.target.previousElementSibling.textContent;
        document.getElementById('modalText').textContent = cardText;
        document.getElementById('myModal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});