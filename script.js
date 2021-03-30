// Navbar function
function hamMenuToggle() {
    var menuCheckbox = document.getElementById('hamCheckBox');

    if (menuCheckbox.checked == true) {
        document.getElementById("myNav").style.transform = "translate(0%)";
        document.getElementById('navBarUl').style.top = '0';
        gsap.fromTo('.tab-content', { y: 800 }, { duration: 1, ease: 'power3.in', y: 60 });
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
document.querySelectorAll('.left-tab-title').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('v-pills-tab').classList.add('left-menu-hide');
        document.getElementById('v-pills-tabContent').classList.remove('right-menu-hide');
    })
});

document.getElementById('menuBack').addEventListener('click', function () {
    document.getElementById('v-pills-tab').classList.remove('left-menu-hide');
    document.getElementById('v-pills-tabContent').classList.add('right-menu-hide');
});

// Navbar onscroll function
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("headerDiv").style.top = "0";
    } else {
        document.getElementById("headerDiv").style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
}

// Split slider 1
var $slider = $('.slideshow .slider'),
    maxItems = $('.item', $slider).length,
    dragging = false,
    tracking,
    rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
    $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 10000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

    if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', -1);
        $('.slideshow-text').slick('slickGoTo', maxItems);
    } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems);
        $('.slideshow-text').slick('slickGoTo', -1);
    } else {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.slideshow-text').slick('slickGoTo', nextSlide);
    }
}).on('mousedown touchstart', function () {
    dragging = true;
    tracking = $('.slick-track', $slider).css('transform');
    tracking = parseInt(tracking.split(',')[5]);
    rightTracking = $('.slideshow-right .slick-track').css('transform');
    rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function () {
    if (dragging) {
        newTracking = $('.slideshow-left .slick-track').css('transform');
        newTracking = parseInt(newTracking.split(',')[5]);
        diffTracking = newTracking - tracking;
        $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
    }
}).on('mouseleave touchend mouseup', function () {
    dragging = false;
});

$('.slideshow-right .slider').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

// svg animations

// creating method for wait function
TimelineLite.prototype.wait = function (position) {
    return this.set({}, {}, position);
};

// png images tween

var splitSliderSvgTween = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
splitSliderSvgTween.fromTo('#cafePng', { x: 200, opacity: 0, ease: 'power3.in' }, { x: 0, opacity: 1 })
    .wait("+=2")
    .to('#cafePng', { x: -100, opacity: 0 })
    .fromTo('#hospitalPng', { x: 200, opacity: 0, ease: 'power3.in' }, { x: 0, opacity: 1 })
    .wait("+=2")
    .to('#hospitalPng', { x: -100, opacity: 0 })
    .fromTo('#cinemaPng', { x: 200, opacity: 0, ease: 'power3.in' }, { x: 0, opacity: 1 })
    .wait("+=2")
    .to('#cinemaPng', { x: -100, opacity: 0 })
    .fromTo('#schoolPng', { x: 200, opacity: 0, ease: 'power3.in' }, { x: 0, opacity: 1 })
    .wait("+=2")
    .to('#schoolPng', { x: -100, opacity: 0 })
    .fromTo('#factoryPng', { x: 200, opacity: 0, ease: 'power3.in' }, { x: 0, opacity: 1 })
    .wait("+=2")
    .to('#factoryPng', { x: -100, opacity: 0 })

// Responsive png images tween

var respPngTween = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
respPngTween.fromTo('#respCafePng', { x: -1000 }, { x: 0 })
    .wait("+=1.5")
    .to('#respCafePng', { x: 1000 })
    .fromTo('#respHospitalPng', { x: -1000 }, { x: 0 })
    .wait("+=1.5")
    .to('#respHospitalPng', { x: 1000 })
    .fromTo('#respCinemaPng', { x: -1000 }, { x: 0 })
    .wait("+=1.5")
    .to('#respCinemaPng', { x: 1000 })
    .fromTo('#respSchoolPng', { x: -1000 }, { x: 0 })
    .wait("+=1.5")
    .to('#respSchoolPng', { x: 1000 })
    .fromTo('#respFactoryPng', { x: -1000 }, { x: 0 })
    .wait("+=1.5")
    .to('#respFactoryPng', { x: 1000 })

// responsive left slider tween

var leftSplitSliderSlideTween = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
leftSplitSliderSlideTween.fromTo('#leftCarouselItem1', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#leftCarouselItem1', { x: 1000 })
    .fromTo('#leftCarouselItem2', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#leftCarouselItem2', { x: 1000 })
    .fromTo('#leftCarouselItem3', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#leftCarouselItem3', { x: 1000 });

// responsive right slider tween

var rightSplitSliderSlideTween = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
rightSplitSliderSlideTween.fromTo('#rightCarouselItem1', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#rightCarouselItem1', { x: 1000 })
    .fromTo('#rightCarouselItem2', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#rightCarouselItem2', { x: 1000 })
    .fromTo('#rightCarouselItem3', { x: -1000 }, { x: 0 })
    .wait("+=15")
    .to('#rightCarouselItem3', { x: 1000 });


// mobile service animation
function animeOne() {
    var mobileAnimation = gsap.timeline({ repeat: -1, repeatDelay: 5, clearProps: 'all' });
    mobileAnimation.fromTo('#basePng', { opacity: 0 }, { opacity: 1 });
    mobileAnimation.fromTo('#mobilePng', { y: -75, opacity: 0 }, { y: 0, opacity: 1, onComplete: animeTwo });
}

function animeTwo() {
    var repeatVal = -1;
    var animationToggleBtn = gsap.timeline({ repeatVal, repeatDelay: 2 });
    var animationgraphPng = gsap.timeline({ repeatVal, repeatDelay: 2 });
    var animationcodePng = gsap.timeline({ repeatVal, repeatDelay: 2 });

    animationToggleBtn.fromTo('#toggleBtns', { x: 100, y: 0, opacity: 0 }, { x: 0, y: 60, opacity: 1 });
    animationgraphPng.fromTo('#graphPng', { x: -150, y: 100, opacity: 0 }, { x: 10, y: 10, opacity: 1 });
    animationcodePng.fromTo('#codePng', { x: -75, y: -50, opacity: 0 }, { x: -75, y: 25, opacity: 1, onComplete: animeFour });
}

function animeFour() {
    var repeatVal = -1;
    var animationSearchPng = gsap.timeline({ repeatVal, repeatDelay: 2 });
    animationSearchPng.fromTo('#searchPng', { x: 0, y: 60, opacity: 0 }, { x: 100, y: 0, opacity: 1 })
        .fromTo('#graph1Png', { x: 0, y: 0, opacity: 0 }, { x: 15, y: 120, opacity: 1 })
        .fromTo('#graph2Png', { x: 0, y: 0, opacity: 0 }, { x: 10, y: 130, opacity: 1 })
        .fromTo('#graph3Png', { x: 0, y: 0, opacity: 0 }, { x: 0, y: 140, opacity: 1 })

        .fromTo('#likePng', { x: 100, y: 0, opacity: 0 }, { x: 100, y: 160, opacity: 1 })
        .fromTo('#sharePng', { x: 60, y: 0, opacity: 0 }, { x: 60, y: 180, opacity: 1 })
        .fromTo('#commentPng', { x: 20, y: 0, opacity: 0 }, { x: 20, y: 200, opacity: 1 });

}
animeOne();

// web service animation
setInterval(function webAnimeOne() {
    var repeatVal = -1;
    var webAnimation = gsap.timeline({ repeatVal, repeatDelay: 2 });

    var serverAnimation = gsap.timeline({ repeatVal });
    var databaseAnimation = gsap.timeline({ repeatVal });
    var documentsAnimation = gsap.timeline({ repeatVal });
    var keyboardAnimation = gsap.timeline({ repeatVal });
    var mouseAnimation = gsap.timeline({ repeatVal });
    var apiAnimation = gsap.timeline({ repeatVal });

    var adminViewAnimation = gsap.timeline({ repeatVal });
    var webViewAnimation = gsap.timeline({ repeatVal });
    var mobileViewAnimation = gsap.timeline({ repeatVal });

    webAnimation.fromTo('#webBasePng', { opacity: 0 }, { opacity: 1 });
    webAnimation.fromTo('#computerPng', { x: 20, y: -70, opacity: 0 }, { x: 100, y: -50, opacity: 1, onComplete: webAnimationTwo });

    function webAnimationTwo() {
        serverAnimation.fromTo('#serverPng', { x: 50, y: 50, opacity: 0 }, { x: 25, y: 65, opacity: 1 });
        databaseAnimation.fromTo('#databasePng', { x: -215, y: 85, opacity: 0 }, { x: -185, y: 100, opacity: 1 });
        documentsAnimation.fromTo('#documentsPng', { x: -170, y: 75, opacity: 0 }, { x: -140, y: 90, opacity: 1 });
        keyboardAnimation.fromTo('#keyboardPng', { x: -80, y: 30, opacity: 0 }, { x: -60, y: 45, opacity: 1 });
        mouseAnimation.fromTo('#mousePng', { x: -53, y: 22, opacity: 0 }, { x: -35, y: 35, opacity: 1 });
        apiAnimation.fromTo('#apiPng', { x: 50, y: -65, opacity: 0 }, { x: 50, y: -30, opacity: 1, onComplete: webAnimationThree });
    }


    function webAnimationThree() {
        adminViewAnimation.fromTo('#adminViewPng', { x: -15, y: 110, opacity: 0 }, { x: 30, y: 87, opacity: 1 });
        webViewAnimation.fromTo('#webViewPng', { x: 0, y: 0, opacity: 0 }, { x: -20, y: 12, opacity: 1 });
        mobileViewAnimation.fromTo('#mobileViewPng', { x: 0, y: 30, opacity: 0 }, { x: 0, y: 0, opacity: 1 });
    }

}, 5000);

// Success carousel

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
var successScreensItem = document.querySelector('.success-screens-item');
var ssIndicate0 = document.getElementById('ssIndicate-0');
var ssIndicate1 = document.getElementById('ssIndicate-1');
var ssIndicate2 = document.getElementById('ssIndicate-2');
var ssIndicate3 = document.getElementById('ssIndicate-3');
var ssIndicate4 = document.getElementById('ssIndicate-4');
var ssIndicate5 = document.getElementById('ssIndicate-5');

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;

        console.log('slideUp' + activeSlideIndex);

        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
        switch (activeSlideIndex) {
            case 1:
                ssIndicate1.classList.add('ss-active');
                break;
            case 2:
                ssIndicate2.classList.add('ss-active');
                break;
            case 3:
                ssIndicate3.classList.add('ss-active');
                break;
            case 4:
                ssIndicate4.classList.add('ss-active');
                break;
            case 5:
                ssIndicate5.classList.add('ss-active');
                break;
            case 6:
                ssIndicate0.classList.add('ss-active');
                break;
            default:
                break;
        }
        // successScreensItem.classList.add('ss-active');

    } else if (direction === 'down') {
        activeSlideIndex--;
        console.log('slideDown' + activeSlideIndex);

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
        switch (activeSlideIndex) {
            case -1:
                ssIndicate1.classList.remove('ss-active');
                break;
            case 4:
                ssIndicate2.classList.remove('ss-active');
                break;
            case 3:
                ssIndicate3.classList.remove('ss-active');
                break;
            case 2:
                ssIndicate4.classList.remove('ss-active');
                break;
            case 1:
                ssIndicate5.classList.remove('ss-active');
                break;
            case 0:
                ssIndicate0.classList.remove('ss-active');
                break;
            default:
                break;
        }
        // successScreensItem.classList.remove('ss-active');
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};