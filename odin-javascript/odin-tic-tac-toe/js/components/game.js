/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

const p1 = player('Player 1', 'X');
const tie = player('Ties');
const p2 = player('Player 2', 'O');

export const Game = (() => {
    let gameWon = false;
    let currentPlayer = p1;

    const isRunning = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => currentPlayer;

    const checkWinner = () => {};
    
    const resetGame = () => {
        gameBoard.clear();
        player.clearAllScores();
        // TODO: Take care to clear each player's myCells
    }

    const switchPlayer = () => ((currentPlayer === p1) ? currentPlayer = p2: currentPlayer = p1);
    const declareTie = () => {};

    return { isRunning, activePlayer, switchPlayer, resetGame };
})();