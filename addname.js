//addname in obj arr
function addName (obj, name, value) {
    obj[name] = value
    return obj
}
console.log(addName({ piano: 500 }, "Brutus", 400))