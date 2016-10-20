class Utils {

	static choose(array) {
		/*
		Choose values from array.
		@Return array:value;
		*/
		return array[Math.floor(Math.random() * array.length)];
	}

	static createToRandomize(dimension){
		/*
		Create a 'toRandomize' array which
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

}
