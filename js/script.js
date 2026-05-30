// Reveal Animation

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

});

reveals.forEach((element) => {
    observer.observe(element);
});

// Slideshow

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

// 10 seconds

setInterval(nextSlide, 10000);

// Booking Form

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Thanks for reaching out! Sean will contact you soon.');

    form.reset();

});