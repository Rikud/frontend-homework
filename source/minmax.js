const min = numbers => Math.min(...numbers);

const minmax = (numbers) => {
	let arr = parser(numbers);
	if (arr.length === 0)
		return [undefined, undefined];
	return minmax_array = [min(arr), max(arr)];
}

const parser = (input) => {
	if (typeof input !== 'string')
		return [];
	let arr = input.split(/,|\s/);
	arr = arr.filter(function(number) {
		if (number === '')
			return false;
		return !isNaN(number);
	});
	return arr;
}