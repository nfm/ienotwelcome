/*
 * ienotwelcome.js, version 1.1
 * Copyright 2009 Nicholas Firth-McCoy
 * http://nfm.id.au/projects/ienotwelcome
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Do not remote this copyright notice.
 *
 */

// Politely tell the user to get a standards compliant browser
function getARealBrowser() {
	// Customize notification appearance here
	var backgroundColor = "#63849F";
	var color = "#333333";
	var position = "fixed";
	var bottom = "0";
	var right = "0";
	var width = "auto";
	var padding = "0.5em 1em";
	var border = "1px solid #3B699F";
	var id = 'ieNotWelcome';

	// Message to display (inserted using innerHTML, so you can specify HTML here for links, images etc)
	var message = "Web page broken? <a style='color: white;' href='http://getfirefox.com'>Get a real web browser!</a>";

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
		IEVersion = parseInt(parseFloat(appVer.substring(versionPos + 5, appVer.indexOf(';', versionPos))));

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
