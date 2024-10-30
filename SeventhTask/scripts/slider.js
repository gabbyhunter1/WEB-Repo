const slider = document.getElementById('slider');
const img = slider.querySelectorAll("img")[0];
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function updateButtonStates() {
    const totalSlides = slider.children.length;
    
    prevBtn.disabled = (currentIndex == 0);
    nextBtn.disabled = (currentIndex == totalSlides - 1);
}

nextBtn.addEventListener('click', () => {
    const slideWidth = img.clientWidth;
    const totalSlides = slider.children.length;

    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`;
    }
    updateButtonStates();
});

prevBtn.addEventListener('click', () => {
    const slideWidth = slider.children[0].offsetWidth;

    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`;
    }
    updateButtonStates();
});

updateButtonStates();