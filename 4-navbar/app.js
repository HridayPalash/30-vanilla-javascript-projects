// NavToggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
})