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
		--	4 = 4x4, 2 = 2x2
		*/
		let table = document.createElement('table');
		let randomized = Utils.alterArray(Utils.createToRandomize(dimension));
		setPanel(randomized);

		for (let i=0; i<dimension; i++) {
			let tr = table.insertRow();

			for (let j=0;j<dimension; j++){
				let td = tr.insertCell();
				td.appendChild(document.createTextNode(randomized.shift()));
			}
		}
		document.body.appendChild(table);
	}
}
