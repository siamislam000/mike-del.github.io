"use strict";

// Contact Page: contact button
$('.email_link').click(function(e) {
    e.preventDefault();
    // handle the form submission (AJAX...)

    $(".email_link").html( "delgado.portland@gmail.com" );

    window.location.assign('mailto: delgado.portland@gmail.com');

    $('body').mousedown(function() {
	  $(".email_link").html( "Michael delgado.portland@gmail.com" );
	}); 
});
