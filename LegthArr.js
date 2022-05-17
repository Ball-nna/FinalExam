function getLength(...arr){
    const b = arr.flat(Infinity).length
    return b
}

console.log(getLength([1, [2, 3]]))