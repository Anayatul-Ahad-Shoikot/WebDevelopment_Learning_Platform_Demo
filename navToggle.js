// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Copy secondary nav info on mobile
const icons = document.querySelectorAll('.secondaryNav ul li i');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const text = icon.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            alert(`Copied: ${text}`);
        });
    });
});
