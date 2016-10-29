function newGame(dimension) {
	/*
		Starts a new game.
	*/
	myGame = new Game();
	tracker = new Tracker();
	view = new View();

	view.buildPanel(dimension);
	msg("Múevete con W, A, S, D");

}


window.onload = function(){
	/*
		Initializer.
	*/
	newGame(3);

}


