let currentIndex = 0;
const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));

function openModal(index) {
    const modal = document.querySelector('.modal');
    const modalImg = modal.querySelector('#modal-img');
    const caption = modal.querySelector('#modal-caption');

    currentIndex = index; 

    const img = galleryItems[index].querySelector('.gallery__img');
    const desc = galleryItems[index].querySelector('.gallery__description');

    modalImg.src = img.src;
    caption.textContent = desc.textContent;

    modal.style.display = 'flex'; 
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'; 
}

function prevImage() {
    if (currentIndex > 0) {
        openModal(currentIndex - 1);
    }
}

function nextImage() {
    if (currentIndex < galleryItems.length - 1) {
        openModal(currentIndex + 1);
    }
}

document.querySelectorAll('.gallery__item').forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index);
    });
});

document.querySelector('.modal__close').addEventListener('click', closeModal);

document.querySelector('.modal__arrow--left').addEventListener('click', prevImage);
document.querySelector('.modal__arrow--right').addEventListener('click', nextImage);
