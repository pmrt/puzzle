class Utils {

	static choose(array) {
		/*
			Choose values from array.
			@Return array:value;
		*/
		return array[Math.floor(Math.random() * array.length)];
	}

	static createDimension(dimension){
		/*
			Create an array which
			we'll use later for randomize
			the elements order.
		*/
		let array = [];

		for (let i=0; i<(dimension*dimension); i++){
			array.push(i);
		}
		return array;
	}

	static alterArray(array){
		/*
			Randomize the array values.
			@Return: array;
		*/
		return array.sort(function(){
			return Utils.choose([1,2])-Utils.choose([1,2])
			});
	}

	static isEmpty(obj){
		/*
			Checks if a obj is empty.
			@Return: boolean
		*/
		for (let property in obj) {
			return false;
		}
		return true;
	}

	static coordTranslate(currentCoords, move){
		/*
			Translates a move like (0@+1)
			to coords.

			Where:
				<0 or 1>@<+1 or -1>
				- 0 or 1 stands for direction (0:row or 1:col)
				- @ It's just a separator
				- +1/-1 it's the movement operation.

			Then:
				- W : 0@-1
				- A : 1@-1
				- D : 1@+1
				- S : 0@+1
		*/
		let movement = move.split('@');
		let direction = parseInt(movement[0]);
		let operation = parseInt(movement[1]);

		currentCoords[direction] += operation;

		return currentCoords;
	}

}
