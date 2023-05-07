// slider header
jQuery(document).ready(function ($) {
	"use strict";
	$('.slider').owlCarousel({
		loop: true,
		items: 3,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 2000,
		smartSpeed: 450,
		navText: false,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 7
			},
			1170: {
				items: 9
			}
		}
	});
});