const min = numbers => Math.min(...numbers);

const minmax = function (numbers) {
	arr = parser(numbers);
	if (arr.length == 0)
		return [undefined, undefined];
	return minmax_array = [min(arr), max(arr)];
}

const parser = function (input) {
	if (typeof input != 'string')
		return null;
	arr = input.split(/,|\s/);
	return removeNaN( arr.map(numberParser) );
}

const numberParser = function(string) {
	if (string == '')
		return NaN;
	return Number(string);
}

const removeNaN = function(array) {
	var counter = 0;
	while (counter < array.length) {
		if (isNaN(array[counter]))
			array.splice(counter, 1);
		else
			counter++;
	}
	return array;
}