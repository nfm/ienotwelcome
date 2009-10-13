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
	<!--[if lte IE 6] >
		return true;
	<![endif] -->

	return false;
}

// The fun starts here
if browserSucks() {
	getARealBrowser();
}
