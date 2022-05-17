//หาตัวเลขใน String
function numInStr(arr) {
	var result = []	
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr[i].length; j++){
			var num = parseInt(arr[i][j])			
			if(num){				
				result.push(arr[i])
				break
			}
		}
	}	
	return result
}
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]))