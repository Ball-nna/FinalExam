//คำนวณคู่คี่
function OddEven(num) {
	const toString = num.toString().split('');
  
  var sum = 0; 
  for(let i = 0; i < toString.length; i++) {
    let currentNum = toString[i];
    sum += Number(currentNum)
  }
  if(sum %2 === 0) {
    return "Evenish"
  } else {
    return "Oddish"
  }
}
console.log(OddEven(25))
console.log(OddEven(24))