class Game {
	/*
	Handles the game
	Logical part.

	ATTRIB:
		- panel. After panel is built, stores
		data as following:
		{<real-order>: <current-order>}

		Example:

		{0: 1,
		 1: 3,
		 2: 0,
		 3: 2}
	*/
	constructor() {
		this.panel = {}
	}

	setPanel(currentOrder) {
		/*
		Gets the currentOrder (array),
		stores the info. as mentioned in
		the Game class attribs.
		*/
		for (let i=0; i<currentOrder.length; i++){
			this.panel[i] = currentOrder[i];
		}
	}

	getPanel(){
		/*
		Return the Panel if
		*/
		if(!Utils.isEmpty(this.panel)) {
			return this.panel;
		} else {
			return false;
		}
	}

	isValidMove() {
	}

}


class Tracker {

	isSorted() {

	}
}
