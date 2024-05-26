const slides = document.querySelectorAll(".slides section");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)
function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

    const channelsButton = document.getElementById("channelsButton");
    const channelsSection = document.getElementById("channels");

    channelsButton.addEventListener("click", function(){
        event.preventDefault();
      channelsSection.scrollIntoView({ behavior: 'smooth' });
    });

    const galleryButton = document.getElementById("galleryButton");
    const gallerySection = document.getElementById("gallery");

    galleryButton.addEventListener("click", function(){
        event.preventDefault();
        gallerySection.scrollIntoView({ behavior: 'smooth'});
    });

    const botButton = document.getElementById("botButton");
    const botSection = document.getElementById("bot");

    botButton.addEventListener("click", function(){
        event.preventDefault();
        botSection.scrollIntoView({ behavior: 'smooth'});
    });
