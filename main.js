function startGame() {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn.");
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
    if (winnerCheck(document.turn)) {
        setMessage("Congratulations! " + document.turn + " won");
    }
    else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn.");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn."); // Needs to be set again so the message switches when an attempt of illegal move is made
    }
}

// Checks for winning conditions
function winnerCheck(move) {
    var flag = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        flag = true;
    }
    return flag;
}

// A way to create row checks without arrays, not pretty, but gets the job done
function checkRow(a, b, c, move) {
    var flag = false;
    if ( (getTile(a) == move) && (getTile(b) == move) && (getTile(c) == move) ) {
        flag = true;
    }
    return flag;
}

function getTile(number) {
    return document.getElementById(number).innerText;
}
