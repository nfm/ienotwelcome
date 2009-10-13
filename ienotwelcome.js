// Politely tell the user to get a modern browser
function getARealBrowser() {
	// Customize notification here
	var backgroundColor = "#FF7200";
	var color = "#333333";
	var position = "fixed";
	var bottom = "0";
	var right = "0";
	var width = "auto";
	var padding = "0 1em";
	// Message is inserted using innerHTML, so you can specify HTML here for links, images etc
	var message = "Web page broken? <a href='http://getfirefox.com'>Get a real web browser</a>";
	var id = 'ieNotWelcome';

	var div = document.createElement('div');
	div.id = id;
	div.setAttribute('style', "position: " + position + "; bottom: " + bottom + "; right: " + right + "; width: " + width + "; padding: " + padding + "; background-color: " + backgroundColor + "; color: " + color + ";");
	// Sorry DOM, it's for a good reason
	div.innerHTML = message;

	// Add the div to the page
	document.body.appendChild(div);
}

// Check whether the user's browser sucks
function browserSucks() {
	// Should IE be allowed at all?
	var allowIE = true;

	// If allowIE is true, what minimum version of IE doesn't suck?
	var minimumIEVersion = 8;

	var appVer = navigator.appVersion.toLowerCase();
	var is_ie, is_minor, is_major;
	var is_ie6, is_ie6up, is_ie7, is_ie7up;

	if (appVer.indexOf('msie') != -1) {
		is_ie = true;	
	};

	// If the user's browser is IE
	if (is_ie) {

		// If allowIE is false, reject their browser
		if (allowIE == false) {
			return true;
		}

		// Determine IE's version numbers
		is_minor = parseFloat(appVer.substring(is_ie + 5, appVer.indexOf(';', is_ie)));
		is_major = parseInt(is_minor);

		if (is_major < minimumIEVersion) {
			return true;
		}
	}

	return false;
}

// The fun starts here
if (browserSucks()) {
	getARealBrowser();
}
