var numColors = 6;
var colorArray = generateRandomColor(numColors);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var resultDisplay = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var actualColor = pickRandomColor();
colorDisplay.textContent = actualColor;
setSquaresColor(squares,colorArray);

easyButton.addEventListener("click", function(event){
	h1.style.backgroundColor = "steelblue";
	resultDisplay.textContent = "";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numColors = 3;
	colorArray = generateRandomColor(numColors);
	actualColor = pickRandomColor();
	colorDisplay.textContent = actualColor;

	for (var i = 0; i < squares.length; i++)
	{
		if (colorArray[i])
		{
			squares[i].style.backgroundColor = colorArray[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}	

});
hardButton.addEventListener("click", function(event){
	h1.style.backgroundColor = "steelblue";
	resultDisplay.textContent = "";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	
	numColors = 6;
	colorArray = generateRandomColor(numColors);
	actualColor = pickRandomColor();
	colorDisplay.textContent = actualColor;

	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colorArray[i];
		if (squares[i].style.display === "none")
		{
			squares[i].style.display = "block";
		}
	}

});


resetButton.addEventListener("click", function(event){
	colorArray = generateRandomColor(numColors);
	actualColor = pickRandomColor();

	colorDisplay.textContent = actualColor;
	setSquaresColor(squares, colorArray);
	h1.style.backgroundColor = "steelblue";
	if (resetButton.textContent == "Play Again?")
	{
		resetButton.textContent = "New Game";
	}
	resultDisplay.textContent = "";
});

function setSquaresColor(divid, colorArray)
{
	for (var index = 0; index < squares.length; index++)
	{
		squares[index].style.backgroundColor = colorArray[index];

		squares[index].addEventListener("click", function(event){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === actualColor) {
			resultDisplay.textContent = "Correct!";
			changeColors(actualColor);
			h1.style.backgroundColor = actualColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			resultDisplay.textContent = "Try Again!";
		}
		});
	}
}

function generateRandomColor(count)
{
	var arr = [];
	for (var index = 0; index < count; index++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb("+red+", "+green+", "+blue+")";
}
function pickRandomColor()
{
	var randomNumber = Math.floor(Math.random() * colorArray.length);

	return colorArray[randomNumber];
}
function changeColors(color)
{
	// squares.forEach(function(element){
	// 	element.style.backgroundColor = color;
	// });
	for (var index = 0; index < squares.length; index++)
	{
		squares[index].style.backgroundColor = color;
	}
}
