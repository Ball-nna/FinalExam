//ใช้คำสั่ง ยกกำลังหาค่า
function shiftToRight(x, y) {
	const res = Math.floor(x/Math.pow(2,y))
    return res
}
console.log(shiftToRight(80,3))
console.log(shiftToRight(-24,2))
console.log(shiftToRight(-5,1))
console.log(shiftToRight(4666,6))
console.log(shiftToRight(3777,6))

