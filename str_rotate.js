//1.เรียงตัวอักษรใหม่จากซ้ายไปขวา
function rightRotations(str){
    let res = [];
	for (let i = str.length; i > 0; i--) {
		res.push(str.slice(i) + str.slice(0, i));
	}
	return res;
}
console.log(rightRotations("abc"))
console.log(rightRotations("abcdef"))
