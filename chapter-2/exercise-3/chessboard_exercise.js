// Newline character ---> \n
// grid 8x8

let gridSize = 8;
let board = ""

for (i = 1; i <= gridSize ; i++ ){    
    for (j = 1; j <= gridSize; j++){
        ((i + j) % 2 ? board += " " : board += "#")
    }
    board += "\n"
}

//shows the result of all loops completed    
console.log(board)

