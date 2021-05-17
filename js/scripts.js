/*  JavaScript for Cafe Carla
	Coded by Ethan Burford, 21/10/20
	Version 0.1 Alpha
*/

// Comment

function test() {
	alert("Boo!");
}

function setCookie() {
	// alert("Boo!");
	var confirmMsg = "The site uses cookies to improve the experience of the site. \nClick OK to ACCEPT or CANCEL to reject cookies."
	var cookiesAccepted = confirm(confirmMsg);
	
	if(cookiesAccepted) {
		alert("Thank You");
	}
	else {
		alert("Bye!");
		window.close();
	}
}

// Function to change them from white to black
function setDayMode() {
	document.getElementById("stylesheet").href = "css/style.css"
}

function setNightMode() {
	document.getElementById("stylesheet").href = "css/alt-style.css"
}