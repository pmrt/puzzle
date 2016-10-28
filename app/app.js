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
			@Parameter : coord: array.
		*/
		this.currentCoord = [];
		this.currentCoord.push(...coord);
	}

	set changeDimension(dimension){
		/*
			Sets the dimension to 'dimension'.
		*/
		this.dimension = dimension;
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

	setCoords(startingOrder) {
		/*
			Gets the startingOrder (array),
			stores the coords.
		*/
		let currentOrder = startingOrder.slice();
		this.changeDimension = Math.sqrt(startingOrder.length);

		for (let i=0; i < this.dimension; i++){
			let row = [];
			for (let j=0; j < this.dimension; j++){
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

	swapCells(newCoords) {
		/*
			Swaps the current zero-cell with
			newCoord's cell.

			@Return: array [lastid, newid] // TODO
		*/
		let newCoordValue = this.getCoords()[newCoords[0]][newCoords[1]];
		let currentCoordValue = this.getCoords()[this.currentCoord[0]][this.currentCoord[1]];

		this.coords[this.currentCoord[0]][this.currentCoord[1]] = newCoordValue;
		this.coords[newCoords[0]][newCoords[1]] = currentCoordValue;

		this.changeCurrentCoord = newCoords;

		return [currentCoordValue, newCoordValue];

	}

	makeMove(move){
		/*
			Make the move 'move'.
		*/
		let newCoords = Utils.coordTranslate(this.playerCell, move);

		if (tracker.isValidCoord(newCoords, myGame.dimension)){
			swapCells(newCoords);
		} else {
			msg("Movimiento no válido!", "Warning");
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
		/*
			Add the KeyDown event.
		*/
		document.addEventListener("keydown", onKeyDown);
	}

}
