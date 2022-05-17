//คำนวนหาค่ากับเพื่อนถ้าค่า b-a น้อยกว่าหรือเท่ากับ 6 จะได้แต้ม ถ้าไม่ก็อด false
function possibleBonus(a, b) {
	if(b-a <= 6 && b-a >0){
        return true
    }else{
        return false
    }
}
console.log(possibleBonus(1,9))