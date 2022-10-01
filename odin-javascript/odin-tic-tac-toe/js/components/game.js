/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

const p1 = player('Player 1', 'X');
const tie = player('Ties');
const p2 = player('Player 2', 'O');

export const Game = (() => {
    let gameWon = false;

    const isRunning = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => {};
    const checkWinner = () => {};
    
    const resetGame = () => {
        gameBoard.clear();
        // TODO
    }

    return { isRunning };
})();