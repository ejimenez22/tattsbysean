// ======================
// REVEAL ANIMATION
// ======================

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach((element) => {
    observer.observe(element);
});


// ======================
// FEATURED WORK SLIDESHOW
// ======================

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {

    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

// Ensure first image is active

if (slides.length > 0) {
    slides[0].classList.add('active');
}

// Change image every 8 seconds

setInterval(nextSlide, 8000);


// ======================
// CONSOLE MESSAGE
// ======================

console.log('TattsBySean website loaded successfully');