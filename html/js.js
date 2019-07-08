
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
	var mystate = statesSelectObject.value;
	window.alert("state changed to " + mystate + " " + document.getElementById("bob").innerHTML);

	// empty out the cities select box
	var cities = document.getElementById("cities");
	
	var x;
	for (x = 0; x < cities.length; x++)
	{
		cities.remove(x);
	}
	
	// add cities for the state into the cities select box
	
	// find the index into the array for geo representing the state
	for (x = 0; mystate != geo[x].state; x++);

	window.alert("found mystate " + mystate + " at index " + x);

	// use that index to iterate all cities, adding them to the cities select box
	for (y = 0; x < geo[x].cities.length; x++)
	{
		cities.add(geo[x].cities[y]);
	} 
}

document.getElementById("bob").innerHTML = "fred";

