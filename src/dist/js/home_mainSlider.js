var revapi;
jQuery(document).ready(function ($) {
    //$(window).load(function() {
    $('.slider-preload').hide();
    $('.tp-banner-container').css({
        'visibility': 'visible',
        'opacity': '1'
    });
    revapi = $('.tp-banner-home-slider').revolution({
        delay: 3000,
        startwidth: 1090,
        startheight: 450,
        startWithSlide: 0,
        hideThumbs: 10,
        fullWidth: "off",
        navigationType: "bullet",
        navigationStyle: "round",
        navigationArrows: "solo",
        fullScreen: 'off',
        hideTimerBar: 'off'
    })
    //})
})