/* ========= Imports ========= */
import { gameBoard } from "./components/gameBoard.js";

/* ========= Global Variables ========= */
const boardContainer = document.querySelector('.game-board');

/* ========= Game Board Object ========= */
boardContainer.addEventListener('click', (e) => {
    if (!gameBoard.isFull()) {
        gameBoard.insert('X', e.target);
    } else {
        gameBoard.clear();
    }
});