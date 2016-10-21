class Game {
	/*
	Handles the game
	Logical part.

	ATTRIB:
		- coords. After coords is built, stores
		coords data.
	*/
	constructor() {
		this.coords = []
	}

	setCoords(startingOrder) {
		/*
		Gets the startingOrder (array),
		stores the  cords.
		*/
		let currentOrder = startingOrder.slice();
		let dimension = startingOrder.length/2;

		for (let i=0; i < dimension; i++){
			let row = []
			for (let j=0; j < dimension; j++){
				row.push(currentOrder.shift());
			}
			this.coords.push(row);
		}
	}

	getCoords(){
		/*
		Return the Coords if
		*/
		if(!Utils.isEmpty(this.coords)) {
			return this.coords;
		} else {
			return false;
		}
	}


}


class Tracker {

	isSorted() {

	}

	isValidMove() {
	}
}
