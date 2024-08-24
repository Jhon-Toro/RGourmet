function navbarScroll() {
    window.addEventListener("scroll", function () {
        let header = document.getElementById('header');
    
        header.classList.toggle("down", window.scrollY > 0);
    });
}

function statusElement(element){
    const status = element.getBoundingClientRect();
    return (
        status.top >= 0 &&
        status.left >= 0 &&
        status.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        status.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll(){
    const serviceItems = document.querySelectorAll('.service__item');

    serviceItems.forEach((item => {
        if (statusElement(item)) {
            item.classList.add('in-view');
        }
    }));
}

window.addEventListener('scroll', onScroll);
navbarScroll();
onScroll();