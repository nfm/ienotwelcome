// Politely tell the user to get a standards compliant browser
function getARealBrowser() {
	// Customize notification appearance here
	var backgroundColor = "#FF7200";
	var color = "#333333";
	var position = "fixed";
	var bottom = "0";
	var right = "0";
	var width = "auto";
	var padding = "0.5em 1em";
	var border = "1px solid #FF4200";
	var id = 'ieNotWelcome';

	// Message to display (inserted using innerHTML, so you can specify HTML here for links, images etc)
	var message = "Web page broken? <a href='http://getfirefox.com'>Get a real web browser!</a>";

	var div = document.createElement('div');
	div.id = id;
	div.setAttribute('style', "position: " + position + "; bottom: " + bottom + "; right: " + right + "; width: " + width + "; padding: " + padding + "; background-color: " + backgroundColor + "; color: " + color + "; border: " + border + ";");
	// Sorry DOM, it's for a good reason
	div.innerHTML = message;

	// Add the notification to the page
	document.body.appendChild(div);
}

// Check whether the user's browser sucks
function browserSucks() {
	// Should IE be allowed at all?
	var allowIE = true;

	// If allowIE is true, what minimum version of IE doesn't suck?
	var minimumIEVersion = 8;

	var appVer = navigator.appVersion.toLowerCase();
	var isIE, IEVersion, versionPos;

	// Determine if the user's browser is IE
	if (appVer.indexOf('msie') != -1) {
		isIE = true;	
	};

	// If the user's browser is IE
	if (isIE) {

		// If allowIE is false, the user's browser sucks
		if (allowIE == false) {
			return true;
		}

		// Determine IE's version number
		versionPos = appVer.indexOf('msie');
		IEVersion = parseInt(parseFloat(appVer.substring(versionPos + 5, appVer.indexOf(';', versionPos)));

		// If IE's version is less than the minimum allowed version, the user's browser sucks
		if (IEVersion  < minimumIEVersion) {
			return true;
		}
	}

	// Otherwise, the user's browser doesn't suck
	return false;
}

// The fun starts here
if (browserSucks()) {
	getARealBrowser();
}
