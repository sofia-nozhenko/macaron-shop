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

const bundleItems = document.querySelectorAll(".bundle-item");

bundleItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        y: 100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.2, // задержка для каждого элемента
    });
});

const setItems = document.querySelectorAll(".set");

setItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        x: 100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.2, // задержка для каждого элемента
    });
});

const careItems = document.querySelectorAll(".care");

careItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        y: 100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.4, // задержка для каждого элемента
    });
});

const kitItems = document.querySelectorAll(".kit-item ");
kitItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        y: 100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.5, // задержка для каждого элемента
    });
});

gsap.to("#bike", {
    scrollTrigger: {},
    duration: 3,
    x: 500,
});

gsap.to(".contact-img", {
    scrollTrigger: {},
    duration: 3,
    x: 0,
    rotate: 360,
});

const offerItemsLeft = document.querySelectorAll(".offer-wrapp_top"),
    offerItemsRight = document.querySelectorAll(".offer-wrapp_bottom ");

offerItemsLeft.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
        },
        autoAlpha: 0,
        y: -100,
        duration: 1,
        ease: "power1.out",
        delay: index * 0.3, // задержка для каждого элемента
    });
});

offerItemsRight.forEach((item, index) => {
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

// Fucking validation!
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // form' value
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        // form validation
        if (!name || !phone) {
            errorMessage.innerText = "Please fill in all fields.";
            return;
        }

        // clear
        errorMessage.innerText = "";

        // object for send data to server
        const formData = {
            name: name,
            phone: phone,
        };

        // post with axios
        axios
            .post("#", formData)
            .then(function (response) {
                // response from server
                console.log(response.data);
                // here you can display a success message or redirect the user
            })
            .catch(function (error) {
                // Error from server
                errorMessage.innerText = "Error. Please try again";
                console.error(error);
            });
    });
});
