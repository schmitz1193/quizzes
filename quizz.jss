var string = "";
var outString = "";
var array = [];
var two = 2;
var aCounter = 0;

array = ["apple", "orange", "pear", "pineapple", "grape", "banana", "kiwi", "mango", "melon"];

var newFruit = document.getElementById("fruit-list");

var currentFruit = "";


for (var i = 0; i < array.length; i = i + 2) {
	currentFruit = array[i];
	if (currentFruit.indexOf("a") >= 0) {
		string = currentFruit.replace(/a/g, "e");	
		outString = outString + "<div class='pretty'>" + string + "</div>";	
	}
}			


newFruit.innerHTML = outString;

//document.getElementById("fruit-list").lastChild.style.fontSize = "20px";
//document.getElementById("fruit-list").lastChild.style.backgroundColor = "blue";
