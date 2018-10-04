function startGame() {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn");
}

function setMessage(message) {
    document.getElementById("message").innerText = message;
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
