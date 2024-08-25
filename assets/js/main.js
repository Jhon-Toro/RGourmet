document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.header__nav-toggle');
    const navList = document.querySelector('#nav-list');
    const currentURL = window.location.href;
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.header__nav-link'); 
    const link2 = document.querySelector('.header__nav-item-inicio');
    const logo = document.querySelector('.header__logo');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('header__nav-list--active');

        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    if (currentURL.includes('gallery.html') || currentURL.includes('contact.html')) {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';

        links.forEach(link => {
            link.style.color = 'black';
        });

        if (link2 && logo) {
            link2.style.color = 'white';
            logo.style.color = 'black';
        }

    }
});
