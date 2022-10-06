//scroll effect on navbar

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})


// toggle faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})



//show menu

const menu = document.querySelector(".nav__menu");
const menuOpen = document.querySelector("#open-btn");
const menuClose = document.querySelector("#close-btn");

menuOpen.addEventListener('click', () => {
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuOpen.style.display = "none";
})

// close menu

const closeNav = () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "inline-block";
}

menuClose.addEventListener('click', closeNav)
