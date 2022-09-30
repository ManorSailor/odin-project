const main = document.querySelector('.game-container');

const view = (() => {
    const section = document.createElement('section');
    section.classList.add('game-board');

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('data-cell-id', i);
        section.appendChild(cell);
    }

    const insert = (gameObject, cell) => {
        cell.textContent = gameObject;
        cell.classList.add('full');
    };

    const clear = () => {
        let child = section.firstChild;
        while (child) {
            child.textContent = '';
            child.classList = "";
            child = child.nextSibling;
        }
    }

    main.appendChild(section);

    return { insert, clear };
})();

const model = (() => {
    // Set is more performant & helped us out a bit in implementation
    // https://www.reddit.com/r/learnjavascript/comments/n1j7ub/comment/gwdpz0h/?utm_source=share&utm_medium=web2x&context=3
    const board = new Set();

    const isBoardFull = () => (board.size === 9);

    const isCellTaken = (cell) => board.has(cell);

    const insert = (cell) => {
        if (!isCellTaken(cell)) {
            board.add(cell);
            return true;
        }
        return false;
    };
    
    const clear = () => board.clear();

    return { isBoardFull, insert, clear };
})();

export const gameBoard = (() => {
    const insert = (gameObject, cell) => {
        const inserted = model.insert(cell.getAttribute('data-cell-id'));
        if (inserted) {
            view.insert(gameObject, cell);
        }
        return inserted;
    }

    const isFull = () => model.isBoardFull();

    const clear = () => {
        view.clear();
        model.clear();
    }

    return { insert, isFull, clear, };
})();