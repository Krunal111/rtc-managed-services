// Testimonials Slider JS
var testimonialsSlider = new Swiper(".testimonials__slider", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            direction: "horizontal"
        },
        1024: {
            slidesPerView: 3
        },
    }
});
// Testimonials Slider JS

// Header Fixed JS
$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
// Header Fixed JS

// Menu Toggle JS
jQuery(document).ready(function () {
    jQuery(".toggle__menu").click(function () {
        jQuery(".header__menu").slideToggle();
        jQuery(".toggle__menu").toggleClass("open");
        jQuery("body").toggleClass("menu-open");
    });
});
// Menu Toggle JS

// Submenu JS
$(".down-arrow").click(function(){
    $(this).toggleClass("show");
});
// Submenu JS