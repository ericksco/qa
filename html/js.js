
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
	window.alert("state changed to " + document.getElementById("states").innerHTML " " + document.getElementById("bob").innerHTML);
}

document.getElementById("bob").innerHTML = mystring;

