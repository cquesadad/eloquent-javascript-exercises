
//iterate the string to count number of B
const countBs = (str) => {
    let counterB = 0
    for ( let i = 0; i <= str.length; i++ ) {
        if ( str[i] == 'B'){
            counterB++
        }
    }
    console.log("The text has " + counterB + " B")
    return counterB
}

console.log(countBs('A Booleano is a dance of true and false'))

//iterate the string to count number of characters selected in the second argument "character"
const countChar = (str, character) => {
    let counterC = 0
    for ( let i = 0; i <= str.length; i++ ) {
        if ( str[i] == character){
            counterC++
        }
    }
    console.log("The text has " + counterC + " " + character)
    return counterC
}

console.log(countChar('A Booleano is a dance of true and false', 'o'))



