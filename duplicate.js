const DupStr = arr => arr.filter((item,index)=>arr.indexOf(item)!=index)

console.log(DupStr(["abcx", "abcx", "7890", "7890"]))
console.log(DupStr(["abc", "a1c", "a1c", "bcd", "bcd"]))
console.log(DupStr(["a test", "test1", "test"]))
console.log(DupStr(["1ac", "ab", "1a", "ab"]))