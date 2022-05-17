//หาค่า
function admirable(n) {
	const res = []
	for(let i = 1; i <= Math.floor(n / 2); i++)
		if(n % i === 0) res.push(i)
	const sum = res.reduce((s, c) => s + c, 0)
	if(n === sum)
		return 'Perfect'
	if(sum > n && res.includes((sum - n) / 2))
		return (sum - n) / 2
	return 'Neither'
}
console.log(admirable(6))
console.log(admirable(12))
console.log(admirable(18))