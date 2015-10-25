function picchange(e) { 
	var e = e || window.event;
	var target = e.target || e.srcElement; 
	var classes = target.className.split(" ");
	if (classes) {
		for (var i = 0; i < classes.length; i++) { 
			if (classes[i] === "logos") { 
				for (var i = 0; i < logos.length; i++) {
					if (logos[i] === target) {
						target.style.content = "url(pic" + (i + 1) + ".jpg";
						target.style.cursor =  "pointer";
						parent1.style.background = "#4C4C4C";
						body.style.background = "#4C4C4C";
						parent2.style.background = "#4C4C4C";
					};
				}; 
			};
		};
	};

 };
  
function mouseout(e) {
	var e = e || window.event;
	var target = e.target || e.srcElement;
	var classes = target.className.split(" ");
	if (classes) {
		for (var i = 0; i < classes.length; i++) {
			if (classes[i] === "logos") {
				for (var i = 0; i < logos.length; i++) {
					if (logos[i] === target ) {
						target.style.content = "url(img" + (i + 1) + ".png";
						parent1.style.background = "#907D7C";
						body.style.background = "#907D7C";
						parent2.style.background = "#907D7C";
					}
				};
			};
		};
	};
};

function excludealt(e) {
	var e = e || window.event;
	var target = e.target || e.srcElement;
	var parent = document.getElementsByClassName("parentz");
	var classes = target.className.split(" ");
		for (var i = 0; i < logos.length; i++) {
			if (target !== logos[i] && target !== parent[i]) { //need logic to exclude non logos
			logos[i].style.display = "none";
			console.log("excludealt");
		};
	};
	if (classes) {
		for (var i = 0; i < classes.length; i++) { 
			if (classes[i] === "logos") { 
				for (var i = 0; i < logos.length; i++) {
					if (logos[i] === target) {
						target.style.content = "url(pic" + (i + 1) + ".jpg";
						console.log("this works");
					}
				}
			}
		}
	}
};

var logos = document.getElementsByClassName("logos"); 
body.addEventListener("mouseover", picchange);
body.addEventListener("mouseout", mouseout);
body.addEventListener("click", excludealt); 
