/* ========= Imports ========= */
import { gameBoard } from "./components/gameBoard.js";
import { player } from "./components/player.js";

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

const p1 = player('Player 1', 'X');
const p2 = player('Player 2', 'O');

console.log(p1);
p1.incrementScore();
p1.incrementScore();
p1.incrementScore();
p1.incrementScore();
p1.clearScore();
console.log(p2);