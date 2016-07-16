"use strict";

// Mobile Menu
$('.responsive-menu-button').sidr({
	name: 'sidr-main',
	side: 'right', 
	source: '.navigation',
	speed: 500, 
});

$('.responsive-menu-button-news').sidr({
	name: 'sidr-left',
	source: '.navigation-news',
	speed: 500, 
});





// Contact Page: contact button
$('.contact-button').click(function(e) {
    e.preventDefault();
    // handle the form submission (AJAX...)

    $(".contact-button").html( "Contacting..." );

    window.location.assign('mailto: intrepidcreativity@gmail.com');

    $('body').mousedown(function() {
	  $(".contact-button").html( "Contact" );
	}); 
});











