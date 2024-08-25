const navToggle = document.querySelector('.header__nav-toggle');
const navList = document.querySelector('#nav-list');

// Añade un evento de clic al botón de toggle
navToggle.addEventListener('click', () => {
    // Alterna la clase activa en la lista de navegación
    navList.classList.toggle('header__nav-list--active');

    // Alterna el atributo aria-expanded para accesibilidad
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
});