
var mystring = "hello there";
var foundstate = -1;


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
		console.log("removing cities index: " + x);
		cities.remove(x);
	}
	
	// add cities for the state into the cities select box
	
	// find the index into the array for geo representing the state
	foundstate = -1;
	for (x = 0; x < geo.length; x++)
	{
		if ( mystate === geo[x].state )
		{
			foundstate = x;
			console.log("found mystate " + mystate + " at index " + x + " value = " + geo[x].state);
			console.log(geo[x]);
		}
	}

	if ( foundstate != -1 )
	{
		for (y = 0; y < geo[foundstate].cities.length; y++)
		{
			console.log(geo[foundstate].cities);
			cities.add(geo[foundstate].cities.[y]);
		} 
	}
	else
	{
		window.alert("didn't find mystate");
	}
}

//document.getElementById("bob").innerHTML = "fred";
