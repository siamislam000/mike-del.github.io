// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 5000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 2500;
			
			//count number of items
			var numberOfItems = $('.rotating-title').length;

			//set current item
			var currentTitle = 0;

			//show first item
			$('.rotating-title').eq(currentTitle).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-title').eq(currentTitle).fadeOut(fadeTime);

				if(currentTitle == numberOfItems -1){
					currentTitle = 0;
				}else{
					currentTitle++;
				}
				$('.rotating-title').eq(currentTitle).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotator.init();
	
});