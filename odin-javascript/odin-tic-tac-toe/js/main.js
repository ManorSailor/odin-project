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
        const player = Game.activePlayer();
        const inserted = gameBoard.insert(player.gameSign, e.target);
        
        if (inserted) {
            player.addCell(inserted);
            Game.checkWinner(player.getCells());
            Game.switchPlayer();
        }
    } else {
        Game.declareResult();
        Game.resetGame();
    }
}