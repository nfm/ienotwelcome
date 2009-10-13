// Politely tell the user to get a modern browser
function getARealBrowser() {
	// Customize colors and message here
	var backgroundColor = "#FF7200";
	var color = "#333333";
	// Message is inserted using innerHTML, so you specify HTML here for links, images etc
	var message = "Web page broken? <a href='http://getfirefox.com'>Get a real web browser</a>"

	var div = document.createElement('div');
	div.setAttribute('style', "position: fixed; bottom: 0; right: 0; width: auto; padding: 0 1em; background-color: " + backgroundColor + "; color: " + color + ";");
	// Sorry DOM, it's for a good reason
	div.innerHTML = message;

	// Add the div to the page
	document.body.appendChild(div);
}

// Check whether the user's browser sucks
function browserSucks() {
	<!--[if lte IE 6] >
		return true;
	<![endif] -->

	return false;
}

if browserSucks() {
	getARealBrowser();
}
