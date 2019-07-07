
var mystring = "hello there";

/*
var x;
for (x = 0; x < geo.length; x++)
{
	window.alert("state = " + geo[x].state);
}
*/

function changeState()
{
	var stateSelectObject = document.getElementById("states");
	window.alert("state changed to " + stateSelectObject.value + " " + document.getElementById("bob").innerHTML);
}

document.getElementById("bob").innerHTML = "fred";

