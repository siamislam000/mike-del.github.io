"use strict";
//Weather API Test
// var api_key = config.MY_API;
$.ajax({
	url : "http://api.wunderground.com/api/6c2942fb7e0ba4e7/geolookup/conditions/forecast/lang:EN/bestfct:1/q/autoip.json",
	dataType : "jsonp",
	success : function(parsed_json) {
		
		//Variable set-up
		var location = parsed_json['location'];
		var current = parsed_json['current_observation'];
		var forecasttxt = $(parsed_json['forecast']['txt_forecast']);
		var forecast = $(parsed_json['forecast']['txt_forecast']['forecastday']);
		var img = "<img class='class_name' src='link'>";
		var city = location['city'];
		var temp = current['temp_f'];
		var icon = img.replace(/link/i ,current['icon_url']);
		var all_description = [] ;
		
		//Print-to-page set-up: using html wrapper id and creating div with js. 
		var weatherReport = $('#weather_container').append("<div class='weather_box'>");
		var weatherBox = $('.weather_box');
		
		//Print: local city, current temperature and current weather icon. 
		weatherBox.append("<div class= 'current-container text-center'><h3 class='weather-location-current'>" + city + ": "  + temp + "&#x2109;" + icon + "</h3></div>");

		var weatherBoxRow = $('.current-container').append("<div id='weatherBoxRow' class='weatherBoxRow row'>");
		var weatherBox = $('.weatherBoxRow');
		
		
		//Calandar Forecast: loop for forcast calandar. includes day & icon.
		for (var i = 0; i < 8; i++) {
				//Variable set-up
				var forecastday_txt = forecast[i];
				var day = forecastday_txt['title'];
				var text = forecastday_txt['fcttext'];
				var day_icon = img.replace(/link/i ,forecastday_txt['icon_url']);
				//Create object literal of all day and night forecast descriptions
				all_description[day] =  text;
				// Create: <div class='calandar_day'> & <p class='weather-day'>.
				// Print: day and day icon.
				weatherBox.append("<div id='calandar_day' class='calandar_day col-xs-3 col-sm-3 col-md-3 col-lg-3'><p class='weather-day'>" + day + "</p>" + day_icon +"</div>");
				//Hide calandar_day for night
				$( ".calandar_day:contains('Night')" ).hide();
		};
		
		//Calandar Forecast: loop for forcast calandar. includes high & low.
		for (var i = 0; i < 4; i++) {
			var forecastday_simple = parsed_json['forecast']['simpleforecast']['forecastday'][i];
			var high = forecastday_simple['high']['fahrenheit'];
			var low = forecastday_simple['low']['fahrenheit'];
			var cal_day_div = $(".calandar_day");
			var $cal_day_div = $(cal_day_div[i *2]);
			weatherReport += $cal_day_div.append("<p class='weather-high-low'>" + high + "&#x2109;" + "/" + low + "&#x2109 </p>");
		};
		
		//Hover action: hover over forecast calandar day to dispaly forecast text description
		$('.calandar_day').hover(
			function() {
				
				// access the day attached to the calandar day (same day as in above for loop)
				var innerText = this['firstChild']['innerText'];
				var first_3_letters = (innerText[0]+innerText[1]+innerText[2]);
				// console.log(first_3_letters);

				for (var key in all_description) {
					var first3_3_letters = (key[0]+key[1]+key[2]);
					// console.log(first3_3_letters);
					if (first_3_letters === first3_3_letters) {$(".logoWU").before("<div class='description'><h2 class='d_title'>" + key + ": </h2><p class='d_txt'>" + all_description[key] + "</p></div>");} else {}	
				}
				
			 },
			function() {
				$.data(this, 'hover', false);
					$('.description').remove();
				 }
		).data('hover', false);

		//creates an id for the last desplayed day. dispaly:none; on small screens. display controled in css
		$('.calandar_day:last-child').prev().attr('id', 'last_day');
		
		//access the Weather Underground logo	
		// weatherReport += weatherBox.append(img.replace(/link/i ,current['image']['url']).replace(/class_name/i ,'logoWU'));
		weatherBoxRow.append(img.replace(/link/i ,current['image']['url']).replace(/class_name/i ,'logoWU'));
	}
});