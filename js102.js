
var numbers = [8, 1, 42, 13, 22, 7, 4, 53];
var first = 0;
var second = 0;
var enterArray = [];
var tempArray =[];
var input = "";
var outPut = "";
var currentNumber = 0;

//Begin jQuery code

$(document).ready(function() {

// Function that sorts integers into order
	function runSort(arrayToSort) {
		arrayToSort.sort(function(first, second) { 
			return first - second; 
		});
		return arrayToSort;
	};

// Function to create new array with numbers 25 or higher
	function runBig(arrayToBig) {
		for (var i = 0; i < arrayToBig.length; i++) {
			if (arrayToBig[i] >= 25) {
				tempArray.push(arrayToBig[i]);
			}
		}
		return tempArray;
	};

//call functions to first sort numbers then pass that to the array sort
	var sortedArray = runSort(numbers);
		console.log("sorted ", sortedArray);

	var bigArray = runBig(sortedArray);
		console.log("bigArray ", bigArray);

//Retrieve value of the entered numbers

	$("#enter-button").click(function()  {
		input = $("#enter-num").val();
		console.log("input ", input);
//convert  entered numbers to an array and parse them to integers

// LUKE WHAT IS ITEM DOING????????--bringing in each "item"
// from the array input...after splitting?????????

		enterArray = input.split(",").map(function(item) {
			return parseInt(item, 10);
		})
		console.log("this is array to functions ", enterArray);

//call functions to sort and get >= 25 
		bigEntered = runBig(enterArray);
		sortedEntered = runSort(bigEntered);

		console.log("bigEntered to div", bigEntered);
//create divs for each number in the array
		for (var j = 0; j < sortedEntered.length; j++) {
			outPut = "<div id='number'>" + sortedEntered[j] + "</div>";
			$("#output-string").append(outPut);
		}
	});

//closing brackets for JQuery
});



