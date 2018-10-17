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


function start() {
  var firstName = document.getElementById('firstPlayer').value;
  var secondName = document.getElementById('secondPlayer').value;
    if (firstName === "" || secondName === "") {
      alert("Please Enter Both Player Names Before Starting");
    } else {
        document.getElementsByClassName('start-container')[0].style.display = 'none';
        document.getElementsByClassName('game-container')[0].style.display = 'block';
        document.getElementById('player1Name').textContent = firstName;
        document.getElementById('player2Name').textContent = secondName;
        startReset();
    }
}

function startReset() {
    clearBoard();
    turns = 1;
    observer();
      if (random()) {
          document.player1IsX = true;
          document.xName = document.getElementById('player1Name').textContent;
          document.oName = document.getElementById('player2Name').textContent;
      } else {
          document.player1IsX = false;
          document.xName = document.getElementById('player2Name').textContent;
          document.oName = document.getElementById('player1Name').textContent;
      }
    setMessage(document.xName + "'s turn.'");
}

function random() {
  return Math.round(Math.random());
  //This will generate numbers between 0-1 & round them so result is either 0 or 1
}

function setMessage(message) {
    document.getElementById("messages").innerText = message;
}

function printSymbol(tile) {
    var audio = new Audio('sounds/click-on.mp3');
    audio.play();
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
        document.player = document.xName;
    } else {
        document.symbol = "O";
        document.player = document.oName;
    }

    /* The observer checks if there's a winner, if there is, this message won't be
    printed, but the one from resultDisplay() instead */
    if (document.winner == null && turns < 9) {
        setMessage(document.player + "'s turn.");
    }
}

function resultDisplay() {
    if (winnerCheck(document.symbol)) {
      //Detecting who won and will add to scoreboard
      if (document.symbol == "X") {
  			if (document.player1IsX) {
  				document.getElementById("player1Score").innerText = parseInt(document.getElementById("player1Score").innerText) + 1;
  			} else {
  				document.getElementById("player2Score").innerText = parseInt(document.getElementById("player2Score").innerText) + 1;
  			}
  		} else {
  			if (document.player1IsX) {
  				document.getElementById("player2Score").innerText = parseInt(document.getElementById("player2Score").innerText) + 1;
  			} else {
  				document.getElementById("player1Score").innerText = parseInt(document.getElementById("player1Score").innerText) + 1;
  			}
  		}		
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
