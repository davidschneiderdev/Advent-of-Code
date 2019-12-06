
function createBoard(size) {
    let board = [];
    for (i = 0; i < size; i++) {
        let row = [];
        for (i = 0; i < size; i++) {
            row.push(".");
        }
        board.push(row);
    }
    return board;
}


console.log(createBoard(10));
