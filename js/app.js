
const navbar = document.querySelector('.navbar');
const hamburguer = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Evento scroll
window.addEventListener('scroll', () => {
    if(this.scrollY >= 100 ) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

})

// Evento click menu de hamburgesa
hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburguer.classList.toggle('active');
})


// typed js
var typed = new Typed('#hero-titles', {
    strings: [
        'Desarrollo Creativo',
        'Fran Dev'
        ],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity
});



