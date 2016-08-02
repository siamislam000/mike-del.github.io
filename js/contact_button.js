"use strict";

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