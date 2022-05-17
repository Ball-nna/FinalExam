//prodSumDigit
function sumDigProd(...args) {
	const prodDigs = (digs) => {
		return digs.reduce((accum, val) => accum * val, 1)
	}
	let sum = args.reduce((accum, val) => accum + val, 0)
	while (sum.toString().length > 1) {
		sum = prodDigs(sum.toString().split(''))
	}
	return sum
}
console.log(sumDigProd(16,28))