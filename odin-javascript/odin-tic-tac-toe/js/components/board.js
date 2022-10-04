/* ========= Imports ========= */
import { main, GRID_SIZE } from "../utils/utils.js";

const view = (() => {
    /* ===== Private ===== */
    // Initialize DOM Nodes
    const section = document.createElement('section');
    section.classList.add('game-board');

    for (let i = 0; i < GRID_SIZE; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('data-cell-id', i);
        section.appendChild(cell);
    }
    
    main.appendChild(section);

    /* ===== Public ===== */
    // Modifiers/Setters
    const insert = (gameSign, cell) => {
        cell.textContent = gameSign;
        cell.classList.add('full');
    }

    const clear = () => {
        let child = section.firstChild;
        while (child) {
            child.textContent = '';
            child.classList = "";
            child = child.nextSibling;
        }
    }

    return { insert, clear };
})();

const model = (() => {
    /* ===== Private ===== */
    // Set is more performant & helped us out a bit in implementation
    // https://www.reddit.com/r/learnjavascript/comments/n1j7ub/comment/gwdpz0h/?utm_source=share&utm_medium=web2x&context=3
    const occupiedBoard = new Set();

    // Accessors/Getters
    const isCellTaken = (cell) => occupiedBoard.has(cell);

    /* ===== Public ===== */
    // Accessors/Getters
    const getCells = () => occupiedBoard;
    const isBoardFull = () => (occupiedBoard.size === 9);

    // Modifiers/Getters
    const insert = (cell) => {
        if (!isCellTaken(cell)) {
            occupiedBoard.add(cell);
            return cell;
        }
        return false;
    }
    
    const clear = () => occupiedBoard.clear();

    return { isBoardFull, insert, clear, getCells };
})();

export const gameBoard = (() => {
    /* ===== Public ===== */
    // Accessors/Getters
    const isFull = () => model.isBoardFull();
    const getCells = () => [...model.getCells()];

    // Modifiers/Setters
    const insert = (gameSign, cell) => {
        const inserted = model.insert(cell);
        if (inserted) {
            view.insert(gameSign, cell);
        }
        return inserted;
    }

    const clear = () => {
        view.clear();
        model.clear();
    }

    return { insert, isFull, clear, getCells };
})();