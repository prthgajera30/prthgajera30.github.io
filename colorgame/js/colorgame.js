var red =[];
var green = [];
var blue = [];

document.getElementById("newGame").addEventListener("click", function() {
	
	for (var i = 0; i < 6; i++) {

	    red.push(Math.floor((Math.random() * 256) + 1));
	    green.push(Math.floor((Math.random() * 256) + 1));
	    blue.push(Math.floor((Math.random() * 256) + 1))
	    document.getElementByClassName("box").style.backgroundColor = "rgb("+red[i]+","+green[i]+","+blue[i]+")";
	}
	
});

