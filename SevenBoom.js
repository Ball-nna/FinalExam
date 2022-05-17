function SevenBoom (arr){
    if(arr.toString().includes(7)){
        return "Boom"
    }else{
        return "No 7 in it"
    }
}
// อีกรูปแบบหนึ่ง
// const sevenBoom =(arr) =>{
// 	return arr.toString().includes(7) ? "Boom!":"there is no 7 in the array"
// }
console.log(SevenBoom([1,2,3,4,5,6,7]))
console.log(SevenBoom([1,2,3,4,5,6]))
console.log(SevenBoom([1,2,3,4,5,6,7]))
console.log(SevenBoom([1,2,3,4,5,6,79]))