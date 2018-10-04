function startGame() {
    document.turn = "X";
}

function printSymbol(tile) {
    tile.innerText = document.turn;
    turnControl();
}

function turnControl() {
    if (document.turn == "X") {
        document.turn = "O";
    }
    else {
        document.turn = "X";
    }
}
