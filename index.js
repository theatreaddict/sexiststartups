function mouseenter() { 
	var parent = document.getElementsByClassName("parent");
	for (var i = 0; i < parent.length; i++) {
		parent[i].style.background = "grey";
	} 
	var bod = document.getElementById("body1");
	bod.style.background = "grey";

} 

function mouseout() {
	var y = document.getElementById("body1");
	var z = document.getElementsByClassName("parent");
	y.style.background = "#907D7C";
	for (var i = 0; i < z.length; i++) {
		z[i].style.background = "#907D7C";
	}
}

function findevent(e) {
	var e = e || window.event;
	var target = e.target || e.srcElement;
		for (var i = 0; i < logos.length; i++) {
			if (target !== logos[i]) {
			logos[i].style.display = "none";
		}

	}
}

var logos = document.getElementsByClassName("logos");
for (var i = 0; i < logos.length; i++) {
	logos[i].addEventListener('mouseenter', mouseenter);
	logos[i].addEventListener('mouseout', mouseout);
}


var parent = document.getElementById("parent");
parent.addEventListener("click", findevent);