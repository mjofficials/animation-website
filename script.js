function hamMenuToggle() {
    var menuCheckbox = document.getElementById('hamCheckBox');

    if (menuCheckbox.checked == true) {
        document.getElementById("myNav").style.transform = "translate(0%)";
        document.getElementById('navBarUl').style.top = '0';
        gsap.fromTo('.right-bg', { y: 800 }, { duration: 1, ease: 'power3.in', y: 60 });
        gsap.fromTo('.tab-content', { y: 800 }, { duration: 1, ease: 'power3.in', y: 0 });
        gsap.from('.left-tab-title', {
            duration: 0.5,
            opacity: 0,
            delay: 1,
            stagger: 0.1,
            ease: 'power2.out',
            x: 0
        })

    } else {
        document.getElementById("myNav").style.transform = "translate(100%)";
        document.getElementById('navBarUl').style.top = '';
    }

}


