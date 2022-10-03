/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";
import { player1, player2, ties, winningPaths } from "../utils/utils.js";

const p1 = player(...player1);
const tie = player(...ties);
const p2 = player(...player2);

export const Game = (() => {
    let gameWon = false;
    let currentPlayer = p1;

    const isRunning    = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => currentPlayer;
    const switchPlayer = () => ((currentPlayer === p1) ? currentPlayer = p2 : currentPlayer = p1);

    const checkWinner = (cells) => {
        if (!cells) return;
        let winningCells = [];

        for (let path of winningPaths) {
            for (let cell of cells) {
                const cellID = cell.getAttribute('data-cell-id');
                
                // If there is a cellID in a winningPath, store the reference of that cell (Not its ID!)
                if (path.includes(cellID)) winningCells.push(cell);
                
                // When we have 3 winningCells in a row, currentPlayer has won the game
                if (winningCells.length === 3) {
                    gameWon = true;
                    return declareResult(winningCells);
                }
            }
            // Reset winningCells when we have exhausted a given path, because no 3 cells were in that path
            winningCells = [];
        }
    }
    
    const resetGame = () => {
        gameBoard.clear();
        player.clearAllScores();
        // TODO: Take care to clear each player's myCells
    }

    // TODO: Refactor this piece of code, perhaps, implement a stateController for handling css classes
    const declareResult = (winningCells) => {
        currentPlayer.incrementScore();
        currentPlayer.board.classList.add('winner');
        winningCells.forEach(cell => cell.classList.add('winner'));
        const s = currentPlayer;
        setTimeout(() => {
            gameBoard.clear();
            s.board.classList.remove('winner');
        }, 2000);
    }

    return { isRunning, activePlayer, switchPlayer, checkWinner, declareResult, resetGame };
})();