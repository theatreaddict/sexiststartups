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
					if (logos[i] === target) {
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
function hide(target, parent) {
	for (var i = 0; i < logos.length; i++) {
		//this hides logos from being shown 
		if (target !== logos[i] && target !== parent[i]) { 
			logos[i].style.display = "none";
			console.log("excludealt");
			};
		}; 
	};
function show(target, parent) {
		for (var i = 0; i < logos.length; i++) {
			//this shows them again and unhides them;
		if (logos[i] === target && target !== parent[i]) {
			for (var i = 0; i < logos.length; i++) {
			logos[i].style.display = "initial";
			console.log("this works")
			}
		};
			console.log('tessst');
		}
	}	
 
//need to turn value true if exclude has been called once
function excludealt(e) {
	
	var e = e || window.event;
	var target = e.target || e.srcElement;
	var parent = document.getElementsByClassName("parentz");
	var classes = target.className.split(" ");
	for (var i = logos.length - 1; i >= 0; i--) {
	if (bool % 2 === 0 && target === logos[i]) {
		hide(target, parent);
		bool += 1;
		break;
		}
	else if (bool % 2 !== 0 && target === logos[i]) {
		show(target, parent);
		bool += 1;
		break;
	}

};

};

console.log('Hey');
var bool = 0;
var logos = document.getElementsByClassName("logos"); 
body.addEventListener("mouseover", picchange);
body.addEventListener("click", excludealt); 
body.addEventListener("mouseout", mouseout);



