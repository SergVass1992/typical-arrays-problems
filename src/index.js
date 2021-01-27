
exports.min = function min (array) {
	if (array == undefined || array.length == 0) {
		return 0;
	} else {
		let minimal = array[0];
		for(let i = 0; i < array.length; i++){
			if (array[i] < minimal) {
				minimal = array[i];
			}
		}
  		return minimal;
	}
}

exports.max = function max (array) {
	if (array == undefined || array.length == 0) {
		return 0;
	} else {
		let maximal = array[0];
		for(let i = 0; i < array.length; i++){
			if (array[i] > maximal) {
				maximal = array[i];
			}
		}
  	return maximal;
	}
}

exports.avg = function avg (array) {
	if (array == undefined || array.length == 0) {
		return 0;
	} else {
		let sum = 0;
		for(let i = 0; i < array.length; i++){
			sum += array[i];
		}
 		 return sum/array.length;
	}
}

