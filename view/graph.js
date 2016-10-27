class View {
	/*
	Handles any graphical
	element of the game.
	*/

	buildPanel(dimension) {
		/*
			Build the panel according to
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
		document.body.appendChild(table);
		addEvents();
	}
}
