// If number is 0 --> even, if number is 1 --> odd, for any other number 
function isEven(n){
    if (n == 0){
        return true
    } else if (n == 1) {
        return false
    } else {
        // (2 * n / Math.abs(n)) idenfify id the number is positive or negative, if positive the result is 2, if negative -2 and minus it to "n"
        return isEven(n - 2 * n / Math.abs(n));
    }
}
console.log(isEven(-100))

