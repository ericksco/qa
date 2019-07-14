

function changeState()
{
	var foundstate = -1;
	console.log("called changeState()");

	var statesSelectObject = document.getElementById("states");
	var mystate = statesSelectObject.value;

	// window.alert("state changed to " + mystate + " " + document.getElementById("bob").innerHTML);

	// empty out the cities select box
	var cities = document.getElementById("cities");
	
	console.log("beginning cities purge, length now = " + cities.length);
	while (cities.length > 0)
	{
		console.log("removing cities index 0");
		cities.remove(0);
	}
	console.log("after cities purge, length now = " + cities.length);

	var x;
	if ( cities.length > 0 )
	{
		for (x = 0; x < cities.length; x++)
		{
			console.log("remaining cities: ");
			console.log(cities[x].text);
		}
	}
	
	// add cities for the state into the cities select box
	
	// find the index into the array for geo representing the state
	for (x = 0; x < geo.length && foundstate == -1; x++)
	{
		if ( mystate === geo[x].state )
		{
			foundstate = x;
			// console.log("found mystate " + mystate + " at index " + x + " value = " + geo[x].state);
			console.log(geo[x]);
		}
	}

	if ( foundstate != -1 )
	{
		var blahobj = geo[foundstate].cities;
		for (y = 0; y < blahobj.length; y++)
		{
			console.log(blahobj[y]);

			var newoption = document.createElement("option");
			newoption.text = blahobj[y];
			newoption.value = blahobj[y];

			cities.add(newoption);
		} 
	}
	else
	{
		console.log("didn't find mystate");
	}
}

// this line will only work provided the javascript was called after the element was defined
document.getElementById("bob").innerHTML = "fred";
