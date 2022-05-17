function countTrue(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count += 1
      }
    }
    console.log(count)
    return count
  }
console.log(countTrue[true,false,false,false])