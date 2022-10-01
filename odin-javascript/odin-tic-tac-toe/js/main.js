/* ========= Imports ========= */
import { Game } from "./components/game.js";
import { gameBoard } from "./components/gameBoard.js";

/* ========= Global Variables ========= */
const boardContainer = document.querySelector('.game-board');

boardContainer.addEventListener('click', main);

/* ========= Main ========= */
function main(e) {
    // Ignore any clicks on the board, we only care about its children
    if (e.target === boardContainer) return;

    if (Game.isRunning()) {
        const currentPlayer = Game.activePlayer();
        const inserted = gameBoard.insert(currentPlayer.gameSign, e.target);
        
        if (inserted) {
            currentPlayer.addCell(inserted);
            // Game.checkWinner(currentPlayer);
            Game.switchPlayer();
        }
    } else {
        Game.declareTie();
        Game.resetGame();
    }
}