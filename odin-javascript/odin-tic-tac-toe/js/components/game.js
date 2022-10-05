/* ========= Imports ========= */
import { gameBoard } from "./board.js";
import { makePlayer, getInstances, seconds } from "../utils/game-props.js";
import { winningPaths, sleep, stateController } from "../utils/utils.js";
import { options } from "./options.js";

const p1  = makePlayer(['Player 1', 'X']);
const tie = makePlayer(['Ties']);
const p2  = makePlayer(['Player 2', 'O']);

export const Game = (() => {
    /* ===== Private ===== */
    let gameWon = false;
    let currentPlayer = p1;
    const resetBtn = options.getResetBtn();
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
        resetBtn.classList.add('disable');
        wait(false, player, state);
    }
    
    const wait = async (status, element, state) => {
        await sleep(seconds);
        // If the last round match wasn't a tie
        if (options.finalRound() && !checkTie()) {
            // Highlight the reset button before exiting the game
            resetBtn.classList.add('winner');
            return;
        }
        nextRound();
        gameWon = status;
        element.removeState(state);
        resetBtn.classList.remove('disable');
    }

    const nextRound = () => {
        // Only increment the round count if there is no tie
        if (!checkTie()) options.incrementRound();
        const playerInstances = getInstances();
        playerInstances.forEach(player => player.clearCells());
        gameBoard.clear();
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
        // If the last round match has been won, return. We don't need to switch player
        if (options.finalRound() && gameWon) return;
        
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
        playerInstances.forEach(player => player.resetPlayer());
        options.resetRound();
        gameBoard.clear();
        gameWon = false;
        resetBtn.classList.remove('winner');
        currentPlayer.removeState('active');
        currentPlayer = p1;
        currentPlayer.setState('active');
    }

    // Attach listener to game reset btn
    resetBtn.addEventListener('click', resetGame);

    return { isPlayable, activePlayer, switchPlayer, checkState, resetGame };
})();