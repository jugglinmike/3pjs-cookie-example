(function() {
	'use strict';
	var cookieEl = document.getElementById('cookie-value');
	var loginEl = document.getElementById('login-via-popup');
	document.cookie = 'via-js=true';

	cookieEl.innerHTML = document.cookie;

	loginEl.addEventListener('click', function(event) {
		var popup = window.open(
			loginEl.getAttribute('href'), '_blank', 'width=460,height=230'
		);

		event.preventDefault();

		window.addEventListener('message', function() {
			popup.close();
		}, false);
	});

}());
