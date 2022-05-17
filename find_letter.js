//หาตัวอักษรที่หายไป
function missingLetter(s) {
	s = s.split("").map(v => v.charCodeAt(0))
	for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        // console.log(s[i-1] + 1)
		if (s[i] > s[i-1]+1 ) 
        return String.fromCharCode(s[i] - 1)
	}
	return "No Missing Letter"
}
// function missingLetter(str) {
//     let result
//         console.log(str.length)
//         for(let i = 0; i<str.length -1; i++){
//             if(str.charCodeAt(i + 1) - str.charCodeAt(i) != 1){
//                  result = String.fromCharCode( str.charCodeAt(i) + 1)
//             }
//         }
//          return result != undefined ? result : 'No Missing Letter'
//     }

// console.log(missingLetter("abcdefg"))
// console.log("br")
console.log(missingLetter("abdefg"))
// console.log(missingLetter("mnopqs"))