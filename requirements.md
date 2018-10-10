# Requirements

## Overview

Tic Tac Toe Expanded allows two human players to compete in games of Tic Tac Toe. The players (Player One and Player Two) take turns placing their tokens ('X's and 'O's, respectively) on a game grid. The first player to place three of their own token in a row, column, or diagonally across the game board wins the round.

## Functional Requirements

_Minimum requirements are those that were met in 'project one.' "Preferred requirements" are those that we will strive to meet in 'project two.'_

_"The system" herein refers to the finished code in conjunction with the software applications, operating systems, frameworks, etc in which the code is designed to run._

### Minimum Requirements

1.  **Two simultaneous head-to-head players** allow two users, U1 and U2, to take turns playing tic tac toe with the software. U1 will be assigned "X" and the system will display a visual indicator that it is U1's turn to move. Once U1's turn is complete, the system will show a visual indicator that it is U2's turn. This continues, alternating turns between U1 and U2, until the game ends as stipulated in Requirement 7 and Requirement 8.

2.  **Collect usernames:** before beginning play, the system displays a text box with the hint text "Enter Player One Name Here." U1 types their input $NAME into the text box. U1 presses the "READY" button, and the system checks whether input has been entered into the text box. If not, the system provides a visual prompt to remind the user to input text into the box. If input has been entered, the system saves this input as $PlayerOneName and repeats the process for Player Two.

3.  **Show game board:** At all times during gameplay, the system should show a Tic Tac Toe grid (parallel pairs of horizontal and perpendicular lines that intersect to form a grid of nine cells) on the screen.

4.  **Show player names** At all times during gameplay, $PlayerOneName and $PlayerTwoName should be visible on the screen, and the system should show a constant visual indication of which player's turn it currently is.

5.  **Accept player input** During gameplay, the system should allow (prompt?) players to touch/tap/click a cell in the game board grid. When the player touches the board, the system checks to determine if the square is empty or has already been played.

5a. If the square has already been played, the system does not respond.

5b. If the square is empty, the system should:

- provide visual feedback by showing the player's token in the cell that was touched
- toggle the player turn to the opposite player (and update the visual notification of player's turn in requirement 4)

6.  **Show played turns/tokens** Once the first player has played the first turn, the gameboard should persist until the round is over (see requirement 9). Played Xs and Os remain in their cells until the round is over.
7.  **Detect and announce player victories** The system will recognize when a win condition has been satisfied (three Xs or 0s in a single row, column, or diagonally) and halt gameplay. A message will appear notifying the appropriate player of their victory. The system will ask users if they wish to have a rematch (see requirement 9)
8.  **Detect full game board without winner** It is possible to play until all nine cells of the game board have been played while neither player has satisfied a win condition. In this instance, the system should halt gameplay and notify the players that a draw game has been reached. The system will ask users if they wish to have a rematch (see requirement 9)
9.  **Allow rematches** When a game concludes, the system will show a visual prompt asking users if they want to play another round. If the users select "yes," the game board is cleared of all Xs and Os, and play starts over. If the users select "no," the system exits (or restarts?)

### Preferred requirements

10.  **The game should be visual** The system will "be a real application" that has a graphical user interface for playing the game

11.  **Start Screen** The system will have a "start" or "home" screen that displays when first running the software. The user will be required to touch/tap/click the screen (possibly a specific "start" button) in order to progress to the name entry process.

  11a.  **Blinking "Press Start"** only if requirement 11 is implemented: The system will have a message stating "Press Start" on the start screen (dependent on Requirement #11) that "blinks" by alternating the color in which it is displayed

12.  **AI Opponent** The system will have the option for a single player to compete against an artificial intelligence opponent, instead of two players competing with one another. Since it is mathematically possible for one player to never allow the other player to win a round, the AI opponent should be programmed to be strategically imperfect such that the human player has a chance to win the round.

13.  **Display scoreboard** After one round of play, if a rematch is selected, the game should show a "scoreboard" from that point forward. This would indicate the number of wins accrued by each player, visible near the player names during gameplay.

14.  **Sound** The game should provide audible feedback when players play their turns and when a round is concluded.

15.  **Color Selection** In addition to entering their names, players may select a color (from a pre-defined palette?) to represent them. Possible implementations include showing the player's name in that color, or allowing the player's X or O tokens to be drawn in that color.

16.  **Coin Toss** Before beginning each round, the game conducts a "coin toss" by selecting a random number. Based on the result, player one or player two could begin play on the next round (become "X")
