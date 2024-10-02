document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.feature-button1');
    const modals = document.querySelectorAll('.modal1');
    const closes = document.querySelectorAll('.close1');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });
    closes.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal1').style.display = 'none';
        });
    });
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});