(function() {
    'use strict';

    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight / 2;
        const element = document.querySelector('.to-top-btn');
        // console.log(element.className);

        const footerHeight = $(".footer").height();

        if (scrolled > coords) {
            goTopBtn.classList.add('back-to-top-show');
            element.classList.add('to-top-btn-first');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back-to-top-show');
            element.classList.remove('to-top-btn-first');
        }
        if((scrolled > coords * 2)){
            element.classList.remove('to-top-btn-first');
            element.classList.add('to-top-btn-second');
        }
        if((scrolled < coords * 2)){
            element.classList.remove('to-top-btn-second');
        }
        if((scrolled > coords * 3)){
            element.classList.remove('to-top-btn-first');
            element.classList.remove('to-top-btn-second');
            element.classList.add('to-top-btn-third');
        }
        if((scrolled < coords* 3)){
            element.classList.remove('to-top-btn-third');
        }

        if((scrolled + document.documentElement.clientHeight) > (document.body.scrollHeight - footerHeight)){
            element.classList.add('to-top-btn-fourth');
        } else {
            element.classList.remove('to-top-btn-fourth');
        }

    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10);
            setTimeout(backToTop, 0);
        }
    }

    const goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();