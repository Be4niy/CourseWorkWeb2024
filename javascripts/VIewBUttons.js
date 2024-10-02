const viewMoreButtons = document.querySelectorAll('.view-more-btn');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-btn');

viewMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        popups[index].classList.add('show');
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        popups[index].classList.remove('show');
    });
});