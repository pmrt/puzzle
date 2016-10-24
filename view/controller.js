/*
	CONTROLLER

	Functions to handle the
	logical app from all view files.

	Want to modify the GUI ?
	You just need to change the html/css

	If you want to modify the whole GUI
	adding new functions and features you
	must use this functions to communicate
	with the app.
*/

function setCoords(currentOrder) {
	/*
	When you have built the
	Panel use this function
	in order to tell the app
	to store that info.

	Pass as parameters the currentOrder
	you've built those elements so
	it will store the information
	as follows:

	[
		[0,1],
	    [2,3]
	]

	Being:
	- 0 : coords[0][0]
	- 1 : coords[0][1]
	- 2 : coords[1][0]
	- 3 : coords[1][1]

	*/
	myGame.setCoords(currentOrder);
}


function getCoords() {
	/*
	Get the panel data you've
	built before.

	If panel data it's empty it
	will return false

	@Return: json object / boolean
	*/
	return myGame.getCoords();
}
