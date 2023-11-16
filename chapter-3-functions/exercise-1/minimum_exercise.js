function min(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

console.log("The minimun is: " + min(3, 18))

//Simplified version
function minified(a, b){
    var result = (a < b) ? a : b
    return result
}

console.log("The minimun is: " + minified(3, 18))
