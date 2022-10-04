/* ========= Imports ========= */
import { gameBoard } from "./gameBoard.js";
import { makePlayer, getInstances, seconds } from "../utils/game-props.js";
import { winningPaths, sleep, stateController } from "../utils/utils.js";

const p1  = makePlayer(['Player 1', 'X']);
const tie = makePlayer(['Ties']);
const p2  = makePlayer(['Player 2', 'O']);

export const Game = (() => {
    /* ===== Private ===== */
    let gameWon = false;
    let currentPlayer = p1;
    currentPlayer.setState('active');

    // Accessors/Getters
    const checkTie = () => (gameBoard.isFull() && !gameWon);
    
    const checkWinner = (cells) => {
        if (!cells) return false;
        let winningCells = [];

        for (let path of winningPaths) {
            for (let cell of cells) {
                const cellID = cell.getAttribute('data-cell-id');
                
                // If there is a cellID in a winningPath, store the reference of that cell (Not its ID!)
                if (path.includes(cellID)) winningCells.push(cell);
                
                // When we have 3 winningCells in a row, currentPlayer has won the game
                if (winningCells.length === 3) return winningCells;
            }
            // Reset winningCells when we have exhausted a given path, because no 3 cells were in that path
            winningCells = [];
        }
        return false;
    }

    const declareResult = (player, cells, state, cellState = state) => {
        player.incrementScore();
        player.setState(state);
        stateController.setState(cells, cellState);
        wait(false, player, state);
    }
    
    const wait = async (status, element, state) => {
        await sleep(seconds);
        gameWon = status;
        element.removeState(state)
        resetGame();
    }

    /* ===== Public ===== */
    // Accessors/Getters
    const isPlayable   = () => (!gameBoard.isFull() && !gameWon);
    const activePlayer = () => currentPlayer;
    
    // Modifiers/Setters
    // Need to use an async fn with await
    const switchPlayer = async () => {
        // We need to wait here because we don't want to switch to the next player when the result is being declared
        if (gameWon) await sleep(seconds);
        // If its a tie, remove active state from players & wait for a while before adding it back
        else if (checkTie()) {
            currentPlayer.removeState('active');            
            await sleep(seconds);
            currentPlayer.setState('active');
        }
        
        // Remove state of old currentPlayer
        currentPlayer.removeState('active');
        
        // Update currentPlayer
        currentPlayer = (currentPlayer === p1) ? p2 : p1;
        
        // Add state to updated currentPlayer
        currentPlayer.setState('active');
    }

    const checkState = (player) => {
        const winningCells = checkWinner(player.getCells());

        if (winningCells) {
            gameWon = true;
            declareResult(player, winningCells, 'winner');
        } else if (checkTie()) {
            declareResult(tie, gameBoard.getCells(), 'active', 'tie');
        }
    }
    
    const resetGame = () => {
        const playerInstances = getInstances();

        // For each player created, call their clearCells
        playerInstances.forEach(player => player.clearCells());
        gameBoard.clear();
    }

    return { isPlayable, activePlayer, switchPlayer, checkState, resetGame };
})();