/* ========= Imports ========= */
import { Game } from "./components/game.js";
import { gameBoard } from "./components/board.js";

/* ========= Global Variables ========= */
const boardContainer = document.querySelector('.game-board');

boardContainer.addEventListener('click', play);

/* ========= Main ========= */
function play(e) {
    // Ignore any clicks on the board, we only care about its children
    if (e.target === boardContainer) return;

    if (Game.isPlayable()) {
        const player = Game.activePlayer();
        const cell = gameBoard.insert(player.gameSign, e.target);
        
        if (cell) {
            player.addCell(cell);
            Game.checkState(player);
            Game.switchPlayer();
        }
    }
}