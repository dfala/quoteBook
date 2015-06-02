var app = angular.module('quoteBook');

app.factory('dataService', function (cookies) {

	////////////////////////////////////////////////////////////////////////////////
	var service = {};
	////////////////////////////////////////////////////////////////////////////////



	service.getData = function () {
		// var quotes = cookies.getCookie();

		var data = cookies.checkCookie();
		if (data) {
			quotes = data;
			return data;
		} else {
			cookies.setCookie(quotes, 1);
		}


		// THIS PART IS INPORTANT (SO THAT BINDING DOESN'T HAPPEN AUTOMATICALLY)
		//return angular.copy(quotes);
	}

	service.addData = function (data) {
		if(!data.text || !data.author) return console.warn('Incomplete or incorrect data.');

		quotes.push(data);
		cookies.setCookie(quotes, 1);

		return data;
	}

	service.removeData = function (quoteText) {
		if (!quoteText) return console.warn('Expected object string to remove object.');

		var success = false;

		for (var i = 0; i < quotes.length; i++) {
			if (quotes[i].text === quoteText) {
				quotes.splice(i, 1);
				success = quotes[i];
				break
			}
		}
		cookies.setCookie(quotes, 1);

		return success;
	}




	var quotes = [
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	]




	////////////////////////////////////////////////////////////////////////////////
	return service;
	////////////////////////////////////////////////////////////////////////////////
})