
var outputTarget = document.getElementById("output-target");
var sectionClick = document.getElementbyClass("article-section");

var header1 = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");



//if a section is clicked, set up an event handler to out //put a message in the output-target element

sectionClick.addeventlistener("click", "sectionMsg");


function sectionMsg(event) {
outputTarget.innerHTML = "You clicked on the " + this.event + " section";	
}


//when you hover over h1 output msg #2, when it leaves, output msg #3

 header1.addeventlistener("hover", "headerMsg");

function headerMsg(event) {
outputTarget.innerHTML = "You moved your mouse over the header!";
}

inputField.addeventListener()