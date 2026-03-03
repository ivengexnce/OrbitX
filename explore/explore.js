const track = document.querySelector('.planets-track');
const cards = document.querySelectorAll('.planet-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });

    // Calculate movement: Each card is 320px + 20px gap
    const cardWidth = 340;
    const centerOffset = (window.innerWidth / 2) - (320 / 2); // Center screen minus half card
    const moveX = centerOffset - (currentIndex * cardWidth);

    track.style.transform = `translateX(${moveX}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Initialize on load
window.addEventListener('resize', updateCarousel);
updateCarousel();0