class View {

	buildPanel(dimension) {
		/*
		Build the panel according to
		the dimension parameter:

		Where:
		--	4 = 4x4, 2 = 2x2
		*/
		let table = document.createElement('table');
		let text = 0;

		for (let i=0; i<dimension; i++) {
			let tr = table.insertRow();

			for (let j=0;j<dimension; j++){
				let td = tr.insertCell();
				td.appendChild(document.createTextNode(text++));
			}
		}

		document.body.appendChild(table);
	}

}

class Controller {

	buildCell(dimension) {
		myGame.cell(dimension);
	}

}

window.onload = function(){
	/*
	Initializer.
	*/
	controller = new Controller();

	myGame = new Game();

	view = new View();
	view.buildPanel(2);
}
