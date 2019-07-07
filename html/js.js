
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
	var statesSelectObject = document.getElementById("states");
	window.alert("state changed to " + statesSelectObject.value + " " + document.getElementById("bob").innerHTML);

	// empty out the cities select box
	var cities = document.getElementById("cities");
	
	var x;
	for (x = 0; x < cities.length; x++)
	{
		cities.remove(x);
	}
	
	// add cities for the state into the cities select box
	
	// geo["north dakota"] = [ ];
	
	var mystate = statesSelectObject.value;
	for (x = 0; x < geo[mystate].cities.length; x++)
	{
		cities.add(geo[mystate].cities[x]);
	} 
}

document.getElementById("bob").innerHTML = "fred";

