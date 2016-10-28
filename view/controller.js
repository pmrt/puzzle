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

// TODO GET DIMENSION (otherwise it only works with dimension: 4)

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

function getPlayerCell() {
	/*
		Get the zero cell which user
		controls coord.

		@Return: array ([row, col])
	*/
	return myGame.playerCell;
}

function addEvents() {
	/*
		Add the new events:

		- OnKeyDown.
	*/
	tracker.addEvents();
}

function swapCells(newCoords) {
	values = myGame.swapCells(newCoords);
	view.swapCells(values[0], values[1]);
}

function onKeyDown(event) {
	/*
		Handler for event previously added:

		- KeyDown

		Where:
			<0 or 1>@<+1 or -1>
			- 0 or 1 stands for direction (0:row or 1:col)
			- @ It's just a separator
			- +1/-1 it's the movement operation.

		Then:
			- W : 0@-1
			- A : 1@-1
			- D : 1@+1
			- S : 0@+1
	*/

	switch (event.keyCode) {
		case 65:
			myGame.makeMove('1@-1');
			break;
		case 87:
			myGame.makeMove('0@-1');
			break;
		case 68:
			myGame.makeMove('1@+1');
			break;
		case 83:
			myGame.makeMove('0@+1');
			break;
	}
}

function msg(text) {
	/*
		Shows a message.
	*/
	view.msg(text);
}
