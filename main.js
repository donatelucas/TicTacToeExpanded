matches = 0;

function startGame() {
    clearBoard();
    matchCount();
    turns = 1;
    document.turn = userX;
    document.winner = null;
    setMessage(document.turn + "'s turn.");
}

function matchCount() {
    if (matches < 1) {
        setUsername();
    }
    matches++;
}

function setUsername() {
    userX = prompt("Player 1: please add your username");
    userO = prompt("Player 2: please add your username");

    if (userX == null || userO == null)
    {
        userX = "X";
        userO = "O";
    }
}

function setMessage(message) {
    document.getElementById("messages").innerText = message;
}

function printSymbol(tile) {
    if (document.winner != null) {
        setMessage(document.turn + " won. " + "Do you want to play again?");
    } else if (tile.innerText == '') {
        tile.innerText = document.turn;
        turnControl();
    } else if (document.winner = null && turns < 9) {
        setMessage("This tile is taken. Still " + document.turn + "'s turn.");
    }
}

function turnControl() {
    if (winnerCheck(document.turn)) {
        setMessage("Congratulations! " + document.turn + " won.");
        document.winner = document.turn;
    }
    else if (!winnerCheck(document.turn) && turns >= 9) {
        setMessage("Wow, much skills, many draws. Do you want to play again?");
    }
    else if (document.turn == userX) {
        document.turn = userO;
        setMessage(document.turn + "'s turn.");
        turns++;
    } else {
        document.turn = userX;
        setMessage(document.turn + "'s turn."); // Needs to be set again so the message switches when an attempt of illegal move is made
        turns++;
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

// Check for what is in the tiles, it's a function that extends checkRow
function getTile(number) {
    return document.getElementById(number).innerText;
}

// Erases the board after match is completed
function clearBoard() {
    for (var i = 1; i <= 9; i++)
    {
        document.getElementById(i).innerText = "";
    }
}
