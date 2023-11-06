// Slick in header
$(document).ready(function () {
    $(".header-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<img src='/img/arrow-prew.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/img/arrow-next.svg' class='prev' alt='1'>",
    });
});

// Preloader
$(window).on("load", function () {
    $("#preloader-active").delay(500).fadeOut("slow");
    $("body").delay(500).css({
        overflow: "visible",
    });
});

// Gsap
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.to(".img-animated", {
    scrollTrigger: {},
    rotate: 360,
    duration: 12,
    x: 0,
});

gsap.to(".macaron-text", {
    duration: 5,
    text: "Macaron cakes and other desserts made with natural ingredients and made with love",
    ease: "none",
});

const collageItems = document.querySelectorAll(".bundle-item");

collageItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        y: 100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.3, // задержка для каждого элемента
    });
});