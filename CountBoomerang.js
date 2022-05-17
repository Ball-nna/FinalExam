const countBoomerangs = arr => {
	let collection = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] === arr[i+2]) && (arr[i] != arr[i+1])) {
			collection++;
		}
	}
	return collection;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))