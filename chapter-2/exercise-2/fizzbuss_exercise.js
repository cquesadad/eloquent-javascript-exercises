//loop for to solve the exercise
for ( let i = 0; i <= 100; i++ ) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz")
    } else if (i % 3 == 0) {
        console.log("fizz")
    } else if (i % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}


//loop while that creates the result of the exercise 

let counter = 1
while (counter <= 100) {
    if (counter % 3 == 0 && counter % 5 == 0){
        console.log("fizzbuzz")
    } else if (counter % 3 == 0){
        console.log("fizz")
    } else if (counter % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(counter)
    }
    counter = counter + 1
}


