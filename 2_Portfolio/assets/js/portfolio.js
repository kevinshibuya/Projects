new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ["section-landing", "section-about", "section-projects", "section-contact"],
    navigationTooltips: ["Landing", "Sobre", "Projetos", "Contato"],
    showActiveTooltip: true,
    continuousVertical: true,
    scrollOverflow: true,
    slidesNavigation: true,
    controlArrows: false
});

sal({
    threshold: 0.1,
    once: false
});


// let tl = anime.timeline({
//     easing: 'easeOutElastic(.8, .6)',
//     duration: 1000
// })

// tl.add({
//     targets: '.anim',
//     duration: 3000,
//     translateX: [-250, 0],
//     opacity: 1,
//     delay: anime.stagger(500)
// })

// const animate = document.querySelectorAll(".anim");

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if(entry.intersectionRatio > 0) {
//             entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
//         }
//         else {
//             entry.target.style.animation = 'none';
//         }
//     })
// })

// animate.forEach(animate => {
//         observer.observe(animate);
// })