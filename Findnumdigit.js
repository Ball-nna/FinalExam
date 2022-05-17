// function numdigit (a){
//     const res = a.toString()
//     return res.length
// }
// console.log(numdigit(1000))
// console.log(numdigit(12))
// console.log(numdigit(1305981031))
// console.log(numdigit(0))

function numdigit(num) {
    if(num < 0){
        num = num * -1;
    }
    return num.toString().length;
}
console.log(numdigit(1000))
console.log(numdigit(12))
console.log(numdigit(1305981031))