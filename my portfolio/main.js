/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__img, .about__img, .Project__img, .skills__img', { delay: 300 });
sr.reveal(
    '.home__data, .skills__data, .about__subtitle, .skills__subtitle, .about__text, .skills__text',
    { delay: 100 }
);
sr.reveal('.homeimg__container, .contactimg__container', { interval: 200 });
sr.reveal('.contact__button, .contact__input', { delay: 100 });

