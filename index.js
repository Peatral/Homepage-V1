// Automatic Slideshow - change text every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (window.innerWidth > 600) {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			x[i].classList.add("w3-animate-right")
		}
		myIndex++;
		if (myIndex > x.length) { myIndex = 1 }
		x[myIndex - 1].style.display = "block";
	} else {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "block";
			x[i].classList.remove("w3-animate-right")
		}
	}
	setTimeout(carousel, 4000);
}
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}