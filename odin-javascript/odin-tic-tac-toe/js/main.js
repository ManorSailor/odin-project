/* ========= Imports ========= */
import * as utils from './utils/utils.js'

/* ========= Global Variables ========= */
const body = document.body;
const main = document.createElement('main');
main.classList.add('game-container');
body.appendChild(main);

/* ========= Game Board Object ========= */
const gameBoard = (() => {
    const render = (() => {
        const section = document.createElement('section');
        section.classList.add('game-board');

        for (let i = 0; i < 9; i++) {
            const child = document.createElement('div');
            child.classList.add('cell');
            child.setAttribute('data-id', i);
            section.appendChild(child);
        }

        main.appendChild(section);
    })();
    
    let occupiedCells = [];

    const isBoardFull = () => (occupiedCells.length === 9);

    const isCellTaken = (cell) => Boolean(occupiedCells[cell]);

    const insert = (gameObject, cell) => {
        cell.appendChild(gameObject.name);
        occupiedCells.push(cell);
    };

    const clearBoard = () => occupiedCells = [];

    return { isBoardFull, isCellTaken, clearBoard };
})();