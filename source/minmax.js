const minmax = (numbers) => {
	const arr = parser(numbers);
	if (arr.length === 0)
		return [undefined, undefined];
	return minmax_array = [Math.min(...arr), Math.max(...arr)];
}

const parser = (input) => {
	if (typeof input !== 'string')
		return [];
	const arr = input.split(/,|\s/).filter((number) => {
		return (number === '') ? false : !isNaN(number);
	});
	return arr;
}