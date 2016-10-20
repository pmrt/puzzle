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

function setPanel(currentOrder) {
	/*
	When you have built the
	Panel use this function
	in order to tell the app
	to store that info.

	Pass as parameters the currentOrder
	you've built those elements so
	it will store the information
	as follows:

		JSON OBJECT.
		{<real-order>: <current-order>}

		Example:

		{0: 1,
		 1: 3,
		 2: 0,
		 3: 2}
	*/
	myGame.setPanel(currentOrder);
}


function getPanel() {
	/*
	Get the panel data you've
	built before.

	If panel data it's empty it
	will return false

	@Return: json object / boolean
	*/
	return myGame.panel;
}
