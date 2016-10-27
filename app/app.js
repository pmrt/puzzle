class Game {
	/*
		Handles the game
		Logical part.

		ATTRIB:
			- coords. After coords is built, stores
			coords data.
			- currentCoord. Stores the zero cell
			coord which user plays.
	*/
	constructor() {
		this.coords = [];
		this.currentCoord = [];
	}

	set changeCurrentCoord(coord){
		/*
			Changes the 0 cell currentCoord.
			If you want to do any checks do 'em over here.
		*/
		this.currentCoord = [];
		this.currentCoord.push(...coord);
	}

	get playerCell(){
		/*
			Returns the player current
			cell which is playing at this
			time.

			@Return: array ([row, col])
		*/
		return this.currentCoord;
	}

	// TODO WITH SET
	setCoords(startingOrder) {
		/*
			Gets the startingOrder (array),
			stores the coords.
		*/
		let currentOrder = startingOrder.slice();
		let dimension = Math.sqrt(startingOrder.length);

		for (let i=0; i < dimension; i++){
			let row = [];
			for (let j=0; j < dimension; j++){
				let rowValue = currentOrder.shift()
				row.push(rowValue);

				if (rowValue == 0) {
					this.changeCurrentCoord = [i, j];
				}
			}
			this.coords.push(row);
		}
	}

	getCoords(){
		/*
			Return the Coords if this.coords
			is not empty.
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

	isValidCoord(coord, dimension) {
		/*
			Checks if a coord is
			valid.

			MUST-BE Conditions:
				- coord <= dimension
				- coord > 0

			Notes:
				- Direction stands for row or col.

			@Return: boolean
		*/
		for (let direction of coord) {
			if (direction > dimension-1 || direction < 0) {
				return false;
			}
		}
		return true;
	}

	addEvents(){
		document.addEventListener("keydown", onKeyDown);
	}

}
