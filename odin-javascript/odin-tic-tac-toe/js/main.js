/* ========= Imports ========= */
import { gameBoard } from "./components/gameBoard.js";

/* ========= Global Variables ========= */
const boardContainer = document.querySelector('.game-board');

/* ========= Game Board Object ========= */
boardContainer.addEventListener('click', (e) => {
    // Ignore any clicks on the board, we only care about its children
    if (e.target === boardContainer) return;

    if (!gameBoard.isFull()) {
        gameBoard.insert('X', e.target);
    } else {
        gameBoard.clear();
    }
});