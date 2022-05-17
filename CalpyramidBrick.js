//คำนวณปิรามิดว่าเท่ากันไหม
function doesTriangleFit(brick, hole) {
	const isTriangle = t => t[0] + t[1] > t[2];
	if (!isTriangle(brick) || !isTriangle(hole)) return false;
	for (let i = 0; i < 3; i++) 
		if (brick[i] > hole[i])
			return false;
	return true
}
console.log(doesTriangleFit([1,1,1],[2,2,2]))
console.log(doesTriangleFit([5,5,5],[1,2,2]))