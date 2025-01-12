const slides = document.querySelectorAll(".slides section");
let slideIndex = 0;
let intervalId = null;

// Initialize the slider on page load
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(() => nextSlide('right'), 5000);
    }
}

function showSlide(index, direction) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove("displaySlide", "slide-in-left", "slide-in-right", "slide-out-left", "slide-out-right");
        if (i === slideIndex) {
            slide.classList.add("displaySlide", direction === 'left' ? "slide-in-left" : "slide-in-right");
        } else {
            slide.classList.add(direction === 'left' ? "slide-out-right" : "slide-out-left");
        }
    });
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex, 'left');
    resetInterval();
}

function nextSlide(direction = 'right') {
    slideIndex++;
    showSlide(slideIndex, direction);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => nextSlide('right'), 5000);
}

// Navigation buttons for slider control
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => prevSlide());
    nextButton.addEventListener("click", () => nextSlide('right'));
}

// Scroll-to-section buttons
const scrollButtons = [
    { buttonId: "channelsButton", sectionId: "channels" },
    { buttonId: "galleryButton", sectionId: "gallery" },
    { buttonId: "botButton", sectionId: "bot" }
];

scrollButtons.forEach(({ buttonId, sectionId }) => {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    
    if (button && section) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
