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

if (slides.length > 0) {
    slides[0].classList.add('active');
}

setInterval(nextSlide, 8000);


// ======================
// PREVIEW IMAGE LIGHTBOX
// ======================

const previewImages = document.querySelectorAll('.preview-strip img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.close-lightbox');

previewImages.forEach((image) => {

    image.addEventListener('click', () => {

        lightbox.classList.add('active');
        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }

});