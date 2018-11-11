$(document).ready(function($){
	"use strict";

	// WOW Js Active
	// new WOW().init();

// Mean menu mobile responsive menu:
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767.98"
    });
// Side-Menu:

    $(".side-menu-trigger").on('click',function () {
        $(".side-menu").addClass("show-side-menu")
    });
    $(".menu-close").on('click',function () {
        $(".side-menu").removeClass("show-side-menu")
    });
    // Hero-area slider:
    $('.slider-active').owlCarousel({
        loop:true,
        autoplay:true,
		items:1,
        smartSpeed:1000,
        autoplayTimeout:2500,
        navigation : true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

}(jQuery));

