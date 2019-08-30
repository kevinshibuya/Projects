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

// const targets = document.querySelectorAll('img');

// const lazyLoad = target => {
//     const io = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             console.log('something');
//             if(entry.isIntersecting) {
//                 const img = entry.target;
//                 const src = img.getAttribute('data-lazy');

//                 img.setAttribute('src', src);

//                 observer.disconnect();
//             }
//         });
//     });

//     io.observe(target);
// }
// targets.forEach(lazyLoad);