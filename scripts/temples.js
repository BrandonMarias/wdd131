// Hamburger menu: toggle the nav and swap the icon between ☰ and ✕
const menuButton = document.querySelector('#menu-btn');
const mainNav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.textContent = isOpen ? '✕' : '☰';
    menuButton.setAttribute('aria-expanded', isOpen);
});

// Footer: current year and last modified date
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
