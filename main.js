function startGame() {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn");
}

function setMessage(message) {
    document.getElementById("messages").innerText = message;
}

function printSymbol(tile) {
    if (tile.innerText = ' ') {
        tile.innerText = document.turn;
        turnControl();
    } else {
        setMessage("Hey, " + document.turn + ", pick another tile.");
    }
}

function turnControl() {
    if (document.turn == "X") {
        document.turn = "O";
    } else {
        document.turn = "X";
    }
}
