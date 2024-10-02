document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.logo-carousel2');
    const slides = carousel.querySelectorAll('.logo-slide2');
    const leftButton = document.querySelector('.carousel-button-left2');
    const rightButton = document.querySelector('.carousel-button-right2');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function moveCarousel(direction) {
        if (direction === 'right') {
            currentIndex = (currentIndex + 1) % slides.length;
        } else {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        showSlide(currentIndex);
    }

    leftButton.addEventListener('click', () => moveCarousel('left'));
    rightButton.addEventListener('click', () => moveCarousel('right'));

    showSlide(currentIndex);
});