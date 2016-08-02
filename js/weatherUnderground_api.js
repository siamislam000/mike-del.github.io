"use strict";

//Weather API Test

$.ajax({
	url : "http://api.wunderground.com/api/6c2942fb7e0ba4e7/geolookup/conditions/forecast/lang:EN/bestfct:1/q/autoip.json",
	dataType : "jsonp",
	success : function(parsed_json) {
		var location_city = parsed_json['location']['city'];
		var location_state = parsed_json['location']['state'];
		var temp_f = parsed_json['current_observation']['temp_f'];

		var current_icon = "<img src="
			current_icon += parsed_json['current_observation']['icon_url'];
			current_icon += ">";

		var weatherReport = $('#weatherTest_wrapper_container').append("<h1>" + location_city + ", " + location_state + " is currently "  + temp_f + "&#x2109;" + current_icon + "</h1>");

		for (var i = 0; i < 4; i++) {
			var day = parsed_json['forecast']['simpleforecast']['forecastday'][i]['date']['weekday'];
			var day_icon = " <img src="
				day_icon += parsed_json['forecast']['simpleforecast']['forecastday'][i]['icon_url'];
				day_icon += "> ";
			var day_high = parsed_json['forecast']['simpleforecast']['forecastday'][i]['high']['fahrenheit'];
		    var day_low = parsed_json['forecast']['simpleforecast']['forecastday'][i]['low']['fahrenheit'];
			weatherReport += $('#weatherTest_wrapper_container').append( "<p>" + day + "</p>" + day_icon + "<p>" + day_high + "&#x2109;" + "/" + day_low +  "&#x2109" + "</p>");
			
		};
		
	}
});