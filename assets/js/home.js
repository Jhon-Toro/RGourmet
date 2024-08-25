function navbarScroll() {
    window.addEventListener("scroll", function () {
        let header = document.getElementById('header');
    
        header.classList.toggle("down", window.scrollY > 0);
    });
}

function statusElement(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    return (
        rect.top < viewportHeight &&
        rect.bottom > 0 &&
        rect.left < viewportWidth &&
        rect.right > 0
    );
}



function onScroll() {
    const serviceItems = document.querySelectorAll('.service__item');

    serviceItems.forEach((item) => {
        if (statusElement(item)) {
            item.classList.add('in-view');
        } else {
            item.classList.remove('in-view'); 
        }
    });
}

window.addEventListener('scroll', onScroll);
navbarScroll();
onScroll();