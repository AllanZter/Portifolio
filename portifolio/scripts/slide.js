document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let slideIndex = 0;

    prevBtn.addEventListener("click", function() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.children.length - 1;
        }
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", function() {
        slideIndex++;
        if (slideIndex >= slides.children.length) { 
            slideIndex = 0;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});

function toggleNav() {
    const mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("active");
}

