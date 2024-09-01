// Theme switcher functionality
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitcher.checked);
    document.body.classList.toggle('light-mode', !themeSwitcher.checked);
});

// Language switcher functionality
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', () => {
    const language = languageSwitcher.value;
    // Here you should implement the logic to change the language
    // This typically involves loading different language files or content
    console.log(`Language switched to: ${language}`);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Ad board script
const ads = document.querySelectorAll('.ad-slide');
let currentAdIndex = 0;
let autoSlideInterval;

// Function to show a specific ad slide
function showAd(index) {
    ads.forEach(ad => ad.style.display = 'none');
    ads[index].style.display = 'flex';
}

// Function to change the ad slide
function changeSlide(direction) {
    currentAdIndex += direction;
    if (currentAdIndex >= ads.length) {
        currentAdIndex = 0;
    } else if (currentAdIndex < 0) {
        currentAdIndex = ads.length - 1;
    }
    showAd(currentAdIndex);
}

// Function to start auto sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

// Function to stop auto sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners to stop auto sliding on hover and resume on mouse leave
ads.forEach(ad => {
    ad.addEventListener('mouseenter', stopAutoSlide);
    ad.addEventListener('mouseleave', startAutoSlide);
});

// Open ad in a new window
function openAd(url) {
    window.open(url, '_blank');
}

// Initialize the ad board
showAd(currentAdIndex);
startAutoSlide();

