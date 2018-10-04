function startGame() {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn");
}

function setMessage(message) {
    document.getElementById("messages").innerText = message;
}

function printSymbol(tile) {
    if (tile.innerText == '') {
        tile.innerText = document.turn;
        turnControl();
    } else {
        setMessage("This tile is taken. Still " + document.turn + "'s turn.");
    }
}

function turnControl() {
    if (document.turn == "X") {
        document.turn = "O";
    } else {
        document.turn = "X";
    }
    setMessage("It's " + document.turn + "'s turn"); // Needs to be set again so the message switches when an attempt of illegal move is made
}
