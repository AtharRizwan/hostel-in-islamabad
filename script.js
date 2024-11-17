 // Ensure that the theme remains the same on page reload
let lightMode = localStorage.getItem('lightMode') === 'true';
document.documentElement.style.setProperty('--background', lightMode ? '#E2E2E2' : '#333');
document.documentElement.style.setProperty('--red', lightMode ? '#F23D4C' : '#F3616D');
document.body.style.color = lightMode ? '#333' : '#E2E2E2';
document.documentElement.style.setProperty('--black', lightMode ? '#000' : '#fff');

function toggleBackground() {
    lightMode = !lightMode;
    document.documentElement.style.setProperty('--background', lightMode ? '#E2E2E2' : '#333');
    document.documentElement.style.setProperty('--red', lightMode ? '#F23D4C' : '#F3616D');
    document.body.style.color = lightMode ? '#333' : '#E2E2E2';
    document.documentElement.style.setProperty('--black', lightMode ? '#000' : '#fff');

    // Save the updated theme state to localStorage
    localStorage.setItem('lightMode', lightMode);
}

function toggleDetails() {
    const details = document.querySelector('.about-details');
    const button = document.getElementById('toggleDetailsBtn');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    }
}

// Initially hide the details
document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelector('.about-details');
    details.style.display = 'block';
});