/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";
import { player1, player2, ties, winningPaths, sleep } from "../utils/utils.js";

const p1 = player(...player1);
const tie = player(...ties);
const p2 = player(...player2);

export const Game = (() => {
    let gameWon = false;
    let currentPlayer = p1;
    currentPlayer.setState('active');

    const isRunning    = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => currentPlayer;
    
    // Need to use an async fn with await
    const switchPlayer = async () => {
        // We need to wait here because we don't want to switch to the next player when the result is being declared
        if (gameWon) await sleep(2000);

        // Toggle state of old currentPlayer
        currentPlayer.removeState('active');
        
        // Swap currentPlayer
        currentPlayer = (currentPlayer === p1) ? p2 : p1;

        // Toggle state of swapped currentPlayer
        currentPlayer.setState('active');
    }

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
        // TODO: Take care to clear each player's myCells
    }

    // TODO: Refactor this piece of code, perhaps, implement a stateController for handling css classes
    const declareResult = async (winningCells) => {
        currentPlayer.incrementScore();
        currentPlayer.setState('winner');
        await sleep(2000);
        gameWon = false;
        currentPlayer.removeState('winner');
        gameBoard.clear();
    }

    return { isRunning, activePlayer, switchPlayer, checkWinner, declareResult, resetGame };
})();