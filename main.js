/*
    This Javascript is rough. I was learning Javascript during this project,
    actually, pretty much learned it just to make this project in Javascript, since
    I always wanted to add a very used scripting language to my arsenal. I'm trying
    to make it a little better during the project, specially using more SOLID
    principles, but might not be possible due to deadlines. But anyways, it was
    good fun and good learning.

    document.symbol -> which symbol is being used in a turn, old document.turn variable
    document.player -> came into place with the necessity of separating display
    from users, it just shows in the messages who is playing.
*/

document.symbol = null;
document.player = null;
document.winner = null;
player1 = null;
player2 = null;
matches = 1;

function startReset() {
    clearBoard();
    turns = 1;
    matchCount();
    observer();
    matches++;
}

function matchCount() {
    console.log("Match is " + matches);
    if (matches < 2) {
        setUsername();
    }
}

function setUsername() {
    player1 = prompt("Player 1: please add your username");
    player2 = prompt("Player 2: please add your username");
    if (player1 == null || player2 == null)
    {
        player1 = "X";
        player2 = "O";
    }
}

function setMessage(message) {
    document.getElementById("messages").innerText = message;
}

function printSymbol(tile) {
    if (document.winner != null) {
        setMessage(document.winner + " won. " + "Do you want to play again?");
    } else if (tile.innerText == '') {
        tile.innerText = document.symbol;
        turns++;
        observer();
    } else if (document.winner == null && turns < 9) {
        setMessage("This tile is taken. Still " + document.player + "'s turn.");
    }
}

function observer(){
    console.log("Player is: " + document.player + ". Turn is " + turns + ". Symbol is: " + document.symbol + ". Winner is: " + document.winner);
    resultDisplay();
    if (turns % 2 > 0) {
        document.symbol = "X";
        document.player = player1;
    } else {
        document.symbol = "O";
        document.player = player2;
    }

    /* The observer checks if there's a winner, if there is, this message won't be
    printed, but the one from resultDisplay() instead */
    if (document.winner == null && turns < 9) {
        setMessage(document.player + "'s turn.");
    }
}

function resultDisplay() {
    if (winnerCheck(document.symbol)) {
        document.winner = document.player;
        setMessage("Congratulations! " + document.winner + " won.");
        console.log("Winner is: " + document.player);
    } else if (!winnerCheck(document.symbol) && turns >= 10) {
        setMessage ("Wow, much skills, many draws. Do you want to play again?");
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

// Erases the board, turning all of the elements in id from 1 to 9 to empty strings
function clearBoard() {
    for (var i = 1; i <= 9; i++)
    {
        document.getElementById(i).innerText = "";
    }
    document.symbol = null;
    document.player = null;
    document.winner = null;
}
