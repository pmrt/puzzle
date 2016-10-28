class View {
	/*
	Handles any graphical
	element of the game.
	*/
	constructor(){
		this.loadElements();
	}

	buildPanel(dimension) {
		/*
			Builds the panel according to
			the dimension parameter:

			Where:
			  -	4 = 4x4, 2 = 2x2

			callback: addEvents
		*/
		let table = document.createElement('table');
		let randomized = Utils.alterArray(Utils.createDimension(dimension));
		setCoords(randomized);

		for (let i=0; i<dimension; i++) {
			let tr = table.insertRow();

			for (let j=0;j<dimension; j++){
				let td = tr.insertCell();
				let ID = randomized.shift()
				td.id = ID;
				td.appendChild(document.createTextNode(ID));
			}
		}

		this.content.appendChild(table);
		addEvents();
	}

	swapCells(currentID, newID) {
		/*
			Swaps 'currentID' td element
			with the 'newID' one.

		*/
		let currentCell = document.getElementById(currentID);
		let newCell = document.getElementById(newID);

		let currentCellValue = currentCell.id;
		let newCellValue = newCell.id;

		currentCell.innerHTML = newCellValue;
		currentCell.id = newCellValue;
		newCell.innerHTML = currentCellValue;
		newCell.id = currentCellValue;


	}

	msg(text) {
		/*
			Shows a message.
		*/
		this.stats.style.display = 'unset';
		this.stats.innerHTML = text;
		setTimeout(this.clearmsg, 2500);

	}

	clearmsg() {
		/*
			Clear the message.
		*/
		this.stats.style.display = 'none';
	}

	loadElements() {
		/*
			Loads the elements at panel setup.
		*/
		this.stats = document.getElementById('stats');
		this.content = document.getElementById('content');
	}
}
