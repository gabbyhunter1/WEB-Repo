const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function updateButtonStates() {
    const totalSlides = slider.children.length;
    
    prevBtn.disabled = (currentIndex == 0);
    nextBtn.disabled = (currentIndex == totalSlides - 1);
}

nextBtn.addEventListener('click', () => {
    const totalSlides = slider.children.length + 1;

    // Move the slider to the left
    currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtonStates();
});

prevBtn.addEventListener('click', () => {
    const totalSlides = slider.children.length;

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtonStates();
});

updateButtonStates();