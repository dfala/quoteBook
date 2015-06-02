var app = angular.module('quoteBook');

app.factory('cookies', function() {

	////////////////////////////////////////////////////////////////////////////////
	var service = {};
	////////////////////////////////////////////////////////////////////////////////


	service.getCookie = function () {
	    var cookie = document.cookie;
	    return cookie;
	}

	service.checkCookie = function () {
	    var messageData = service.getCookie();
	    messageData = messageData.substring(5);
	    
	    messageData = JSON.parse(messageData);
	    if (messageData) {
	        return messageData;
	    } else {
	    	return false;
	    }
	}

	// second param defines number of days until cookie expires
	service.setCookie = function (cookieValue, expDate) {
	    var d = new Date();
	    d.setTime(d.getTime() + (expDate*24*60*60*1000));
	    var expires = "expires=" + d.toUTCString();

	    // create cookie
	    cookieValue = JSON.stringify(cookieValue);
	    // return console.log(cookieValue);
	    document.cookie = "data=" + cookieValue + "; path=/; " + expires;
	}

	service.deleteCookie = function (callback) {
		date = Date();
		document.cookie = 'data=; expires=' + date + ';';
		setTimeout(callback, 50);
	}




	////////////////////////////////////////////////////////////////////////////////
	return service;
	////////////////////////////////////////////////////////////////////////////////

})