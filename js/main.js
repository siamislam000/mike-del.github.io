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


