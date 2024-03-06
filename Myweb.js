let indicator = document.querySelector('#indicator');
let items = document.querySelectorAll('.navigation a');

function marker(e) {
    indicator.style.left = e.offsetLeft + 'px';
    indicator.style.width = e.offsetWidth + 'px';
}

// Hide the indicator initially
indicator.style.opacity = 0;

items.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        marker(e.target);
        indicator.style.opacity = 1; // Show the indicator on hover
    });

    link.addEventListener('mouseout', () => {
        // Hide the indicator when the mouse leaves the link
        indicator.style.opacity = 0;
    });
});

// Show the indicator initially over the first link
marker(items[0]);

const dynamicText = document.querySelector('.transition-text');
const sportsTerms = ["Martial Arts","MMA", "KungFu", "Karate", "Kickboxing","Taekwondo"];
let termIndex = 0;
let charIndex = 0;

function updateText() {
    let currentTerm = sportsTerms[termIndex];
    const currentText = `${currentTerm}`;

    dynamicText.classList.add('active');
    dynamicText.querySelector('span').textContent = currentText.slice(0, charIndex);

    if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(updateText, 100); // Typing speed: 100 milliseconds per character
    } else {
        setTimeout(() => {
            dynamicText.classList.remove('active');
            termIndex = (termIndex + 1) % sportsTerms.length;
            charIndex = 0;
            setTimeout(updateText, 1000); // Delay between terms: 1 second
        }, 1000); // Wait for 1 second before changing text
    }
}

// Call the function to start the text animation
setTimeout(updateText, 1000); // Initial delay of 1 second
