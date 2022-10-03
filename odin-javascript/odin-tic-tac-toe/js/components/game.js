/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";
import { winningPaths } from "../utils/utils.js";

const p1 = player('Player 1', 'X');
const tie = player('Ties');
const p2 = player('Player 2', 'O');

export const Game = (() => {
    let gameWon = false;
    let currentPlayer = p1;

    const isRunning = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => currentPlayer;
    const switchPlayer = () => ((currentPlayer === p1) ? currentPlayer = p2: currentPlayer = p1);

    const checkWinner = (cells) => {
        let counter = 0;

        for (let path of winningPaths) {
            for (let cell of cells) {
                if (path.includes(cell)) {
                    counter++;
                }
                
                // Denotes a player has 3 paths in a row
                if (counter === 3) {
                    gameWon = true;
                    currentPlayer.incrementScore();
                    // return;
                }
            }
            // Reset the counter back to 0, when we have exhausted a given path
            counter = 0;
        }
    }
    
    const resetGame = () => {
        gameBoard.clear();
        player.clearAllScores();
        // TODO: Take care to clear each player's myCells
    }

    const declareResult = () => {};

    return { isRunning, activePlayer, switchPlayer, checkWinner, declareResult, resetGame };
})();