"use strict";
//Weather API Test
$.ajax({
	url : "http://api.wunderground.com/api/6c2942fb7e0ba4e7/geolookup/conditions/forecast/lang:EN/bestfct:1/q/autoip.json",
	dataType : "jsonp",
	success : function(parsed_json) {
		//var set-up
		var location = parsed_json['location'];
		var current = parsed_json['current_observation'];
		var forecasttxt = $(parsed_json['forecast']['txt_forecast']);
		var forecast = $(parsed_json['forecast']['txt_forecast']['forecastday']);
		var img = "<img src='link'>";
		var city = location['city'];
		var temp = current['temp_f'];
		var icon = img.replace(/link/i ,current['icon_url']);
		var weatherReport = $('#weatherTest_wrapper_container').append("<div class='weather-box'>");
		var weatherBox = $('.weather-box');
		//print: top local div (city:temp & icon)
		weatherReport += weatherBox.append("<div class= 'current-container'><h3 class='weather-location-current'>" + city + ": "  + temp + "&#x2109;" + icon + "</h3></div>");
		//loop for forcast calandar. includes day, icon, high & low
		for (var i = 0; i < 4; i++) {
			var forecastday = parsed_json['forecast']['simpleforecast']['forecastday'][i];
			var day = forecastday['date']['weekday'];
			var day_icon = img.replace(/link/i ,forecastday['icon_url']);
			var high = forecastday['high']['fahrenheit'];
		    var low = forecastday['low']['fahrenheit'];
		    weatherReport += weatherBox.append("<div class='day-icon-high-low-small-box'><p class='weather-day'>" + day + "</p>" + day_icon + "<p class='weather-high-low'>" + high + "&#x2109;" + "/" + low + "&#x2109 </p></div>");
		};
		//hover action: hover over forecast calandar day to dispaly forecast text description
		$('.day-icon-high-low-small-box').hover(
			function() {
				//access the day attached to the calandar day (same day as in above for loop)
				var value_cal_day = $(this);
				var data = $(value_cal_day['context']['firstChild']['firstChild']['data']);
				var day = data['selector'];
				// access keys:values in the txt forecast(location of forecast description)
				$.each(forecast, function(fkey,fvalue) {
					var for_day = fvalue['title'];
					var for_des = fvalue['fcttext'];
					// matches the calandar day with the forecast descrition day.Prints description. 
					if (day === for_day) {
						console.log(for_des);
					} else {
						console.log('no');
					}
				});
			 },
			function() { 
				$.data(this, 'hover', false);
					$('.forecast_description').hide();
				 }
		).data('hover', false);

		//creates an id for the last day. dispaly:none; on small screens. display controled in css
		$('.day-icon-high-low-small-box:last-child').attr('id', 'last_day');
		weatherReport += weatherBox.append('</div>');
		//access the Weather Underground logo	
		weatherReport += weatherBox.append(img.replace(/link/i ,current['image']['url']));
	}
});