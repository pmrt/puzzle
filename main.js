function newGame(dimension) {
	/*
		Starts a new game.
	*/
	myGame = new Game();
	tracker = new Tracker();
	view = new View();

	view.buildPanel(dimension);

}


window.onload = function(){
	/*
		Initializer.
	*/
	newGame(4);

}


